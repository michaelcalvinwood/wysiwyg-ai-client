import './WysiwygAi.scss';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import JoditEditor, { Jodit, Popup } from "jodit-pro-react";
import configPro from './configPro';
import settings from './settings.json';
import axios from 'axios';

/**
 * Utilities
 */
import setBreakPoints from './utils/setBreakPoints';
import { addCloseButton } from './utils/addCloseButton';
import groupToButtonList from './utils/groupToButtonList';
import { addChatButton } from './utils/addChatButton';
import { addFullScreenButton } from './utils/addFullScreenButton';
import { addExitFullscreenButton } from './utils/addExitFullScreenButton';
import { joditPrompt } from './utils/prompt';
import { addDownloadButton } from './utils/addDownloadButton';

function WysiwygAI({content, setContent, handleClose}) {
  const showExamples = false;

  
  const [ fullsize, setFullsize ] = useState(false);
  const [ editorInstance, setEditorInstance] = useState(null);

  const origButtons = [...Jodit.defaultOptions.buttons];
  console.log('origButtons', origButtons)

  const editor = useRef(null);

  configPro.events = { 
    afterInit: (instance) => setEditorInstance(instance)
  }
  setBreakPoints(Jodit);

  const config3 = useMemo(
      () => (configPro),
      []
  );

  const hello = (data) => console.log(data);

  /**
   * Button Handlers
   */
  const handleChat = async ({id, command, chatbotId, editor, close}) => {
    // const request = {
    //   url: settings.backend + '/ai-stream',
    //   method: 'post',
    //   responseType: 'stream',
    //   data: {
    //     query: command
    //   }
    // }
    // axios(request)
    // .then(response => response.data.on(hello))

    editor.events.fire('closeAllPopupsAndModals');


    editor.s.insertHTML(`<div id="${id}"></div>`);
    var currentHtml = editor.getEditorValue();
    setContent(currentHtml);
    const el = document.getElementById(id);

    try {
      const query = { query: command }; // Replace 'your_query_here' with your actual query
      const response = await fetch(settings.backend + '/ai-stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      const processStream = async () => {
        let done, value;
        while (!done) {
          ({ done, value } = await reader.read());
          if (value) {
            let token = decoder.decode(value, { stream: true });
            const newHtml = el.innerHTML + token;
            el.innerHTML = newHtml;
            // currentHtml = editor.getEditorValue();
            // console.log('current', currentHtml)
          }
        }
        
      };

      processStream();
    } catch (error) {
      console.error('Error fetching stream:', error);
    }
    
  }

  const handleFullScreen = () => setFullsize(true);

  const handleExitFullScreen = () => setFullsize(false);

  /**
   * Examples
   */

  useEffect(() => {
    /**
     * Example Jodit prompt
     */
    if (showExamples) {
      joditPrompt(Jodit, "Example Title", "Example Instructions", (value) => {
        console.log(value);
      }, 'Example Placeholder', 'Example Default Value');
    }

    
  })

  /**
   * Toggle display of fullScreen / exitFullScreen buttons
   */
  useEffect(() => {
    setTimeout(() => {
      const classToDisable = fullsize ? '.jodit-toolbar-button_useFullscreen' : '.jodit-toolbar-button_exitFullscreen';
      const classToEnable = !fullsize ? '.jodit-toolbar-button_useFullscreen' : '.jodit-toolbar-button_exitFullscreen';
      
      let el = document.querySelector(classToDisable);
      if (el && el.style.display !== 'none') el.style.display = 'none';

      el = document.querySelector(classToEnable);
      if (el && el.style.display !== 'block') el.style.display = 'block';
    }, 250)
  })

  /**
   * Add buttons and popups
   */
  useEffect(() => {
    addCloseButton(Jodit, handleClose)
    addChatButton(Jodit, handleChat);
    addFullScreenButton(Jodit, handleFullScreen);
    addExitFullscreenButton(Jodit, handleExitFullScreen);
    addDownloadButton(Jodit)
  })

  /**
   * Important hooks
   */
  useEffect(() => {
    if (editorInstance) {
      const doc = editorInstance.editorDocument;
      const html = editorInstance.editorDocument.querySelector('html');
      console.log('doc', doc)
    }
    console.log('button groups', groupToButtonList(editor))
  })

  return (
    <div className='WysiwygAI'>
         <JoditEditor
            className={fullsize ? "WysiwygAI__jodit WysiwygAI__jodit--fullsize" : "WysiwygAI__jodit"}
                ref={editor}
                value={content}
                config={config3}
                tabIndex={1} // tabIndex of textarea
                onBlur={setContent}
                onChange={setContent}
                
            />
    </div>
  )
}

export default WysiwygAI
import './WysiwygAi.scss';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import JoditEditor, { Jodit, Popup } from "jodit-pro-react";
import configPro from './configPro';

/**
 * Utilities
 */
import setBreakPoints from './utils/setBreakPoints';
import { addCloseButton } from './utils/addCloseButton';
import groupToButtonList from './utils/groupToButtonList';
import { addChatButton } from './utils/addChatButton';
import { addFullScreenButton } from './utils/addFullScreenButton';
import { addExitFullscreenButton } from './utils/addExitFullScreenButton';

function WysiwygAI({content, setContent, handleClose}) {
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

  /**
   * Button Handlers
   */
  const handleChat = ({id, command, chatbotId}) => {

  }

  const handleFullScreen = () => setFullsize(true);

  const handleExitFullScreen = () => setFullsize(false);

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
    addExitFullscreenButton(Jodit, handleExitFullScreen)
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
                //onChange={setContent}
                
            />
    </div>
  )
}

export default WysiwygAI
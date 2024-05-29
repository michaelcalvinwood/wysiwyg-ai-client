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

  /**
   * Add buttons and popups
   */
  useEffect(() => {
    addCloseButton(Jodit, handleClose)
    addChatButton(Jodit, handleChat);
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
import './WysiwygAi.scss';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import JoditEditor, { Jodit, Popup } from "jodit-pro-react";
import configPro from './configPro';

function WysiwygAI({content, setContent}) {
    const [ fullsize, setFullsize ] = useState(false);
    const [ editorInstance, setEditorInstance] = useState(null);

    const editor = useRef(null);

    configPro.events = { 
     afterInit: (instance) => setEditorInstance(instance)
    }

    const config3 = useMemo(
        () => (configPro),
        []
    );

  useEffect(() => {
    if (editorInstance) {
      const doc = editorInstance.editorDocument;
      const html = editorInstance.editorDocument.querySelector('html');
      console.log('doc', doc)
    }
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
import './WysiwygAi.scss';
import React, { useMemo, useRef, useState } from 'react'
import JoditEditor, { Jodit, Popup } from "jodit-pro-react";
import settings from './settings.json';

function WysiwygAI({content, setContent}) {
    const [ fullsize, setFullsize ] = useState(false);
    const editor = useRef(null);

    let configPro =  {
        license: settings.JoditLicense,
        toolbarAdaptive: true,
        readonly: false,
        fullsize: false,
        allowTabNavigationallowTabNavigation: false,
        showTooltipshowTooltip: true,
        showTooltipDelay: 175,
        // iframe: true,
        // iframeStyle: 'html{width: 100%; min-width: 900px;}',
      
        // disablePlugins: ['cleanHTML'],
        // enableDragAndDropFileToEditor: true,
        // theme: "dark",
        //iframeStyle: IFRAME_STYLE,
        // minWidth: "100%",
        // tabIndex: 0,
        // height: height,
        // minHeight: height,
        // allowResizeY: false,
        // beautify: false,
        // beautifyHTMLCDNUrlsJS: [],
        // sourceEditorCDNUrls: [],
        // showCharsCounter: !readOnly,
        // showWordsCounter: !readOnly,
        // showXPathInStatusbar: !readOnly,
        editorClassName: false, // can assign a string classname to the editor
        className: false, // can assign string classname to main editor container
        // style: {
        //   font: '44px Times New Roman',
        //   color: red
        // }, // styles the content area
        // containerStylecontainerStyle: {
        //   editorStyle: {
        //     font: '12px Arial',
        //     color: '#0c0c0c'
        //    }
        // },
        styleValues: {
          // 'color-text': 'red',
          // colorBorder: 'black',
          'color-panel': '#efefef'
        }, // for complete list: https://github.com/xdan/jodit/blob/main/src/styles/variables.less#L25
  
        // showPlaceholder: false,
        // placeholder: "Write something awesome",
        // events: 
        //      { 
        //       afterInit: (instance) => { 
        //         window.editorInstance = instance;
        //         setEditorInstance(instance);
               
        //         instance.e.on('clickImg', (img) => console.log(img.src));
        //         instance.e.on('selectionChange', () => console.log('yes'));
        //         instance.e.on('selectionchange', () => console.log('yes sir'));
                
        //         console.log('buttonGroups', joditUtils.getGroupToButtonList(instance));
                
        //       } 
        // },
  
        // buttons: [...startingButtons], 
        // popup: {
        //   "p": [
        //     {
        //       name: 'cssStyle'
        //     }
        //   ],
        //   "div": [
        //     {
        //       name: "cssStyle"
        //     }
        //   ],
        //   "li": [
        //     {
        //       name: "cssStyle"
        //     }
        //   ]
        // },
        // cleanHTML: {
        //   fillEmptyParagraph: false,
        //   // allowTags: 'p, a, li, ul, ol, table, div, h1, h2, h3, h4, h5, h6, title',
        //   allowTags: 'div'
        // }
        cleanHTML: false
      };
    const config3 = useMemo(
        () => (configPro),
        []
    );

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
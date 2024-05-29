import settings from './settings.json';

const configPro =  {
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
    height: '100%',
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

  export default configPro;
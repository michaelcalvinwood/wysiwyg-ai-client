
const setBreakPoints = (Jodit, sizeSM = 500, sizeMD = 768, sizeLG = 1200) => {
    console.log('setBreakPoints')
    Jodit.defaultOptions.sizeSM = sizeSM;
    Jodit.defaultOptions.sizeMD = sizeMD;
    Jodit.defaultOptions.sizeLG = sizeLG;

    Jodit.defaultOptions.buttonsMD = [
      "useFullscreen", "exitFullscreen", // Group: clipboard
      "source", // Group: 'source'
      "mobileView",
      "showBlocks", 
      "|",
      //'flexRows', 'cardLayout', 'addSection', 'cssStyle',
      "|", // Group: AI
      "chat", "media", "pasteCode",
      "|", 
      'table', 'link', 'emoji', 'keyboard', 'pageBreak', // Group: insert
      {group: 'form', buttons: []},
      "---",
      "undo", "redo", // Group history (removed "backup.restore")
      "closeEditor",
      "\n", 
      "bold", "italic", "underline", // Group font-style
      {group: 'list', buttons: []},
      {group: 'indent', buttons: []},
      "font", "fontSize", "paragraph", "lineHeight", // Group: font (removed "classSpan")
      "---",
      

     
        
      "dots"
    ]

    Jodit.defaultOptions.buttonsSM = [
        "source", // Group: 'source'
        "|", // Group: AI
        "chat", "media", "pasteCode",
        "|", 
        'link', 'emoji', 'keyboard', // Group: insert
        "---",
        "undo", "redo", // Group history (removed "backup.restore")
       
        "\n", 
        "bold", "italic", "underline", // Group font-style
        {group: 'indent', buttons: []},
        "fontSize", // Group: font (removed "classSpan")
        "---",

        "dots"
    ]

    Jodit.defaultOptions.buttonsXS = [
    
     "chat", "media", "pasteCode",
      "---", 
      "undo", "redo", // Group history (removed "backup.restore")
     
    //  {group: 'indent', buttons: []}, 
      "\n", 
      "bold", "italic", "underline", // Group font-style
     'emoji', // Group: insert
      "---",

      "dots"
    ]
}

export default setBreakPoints;
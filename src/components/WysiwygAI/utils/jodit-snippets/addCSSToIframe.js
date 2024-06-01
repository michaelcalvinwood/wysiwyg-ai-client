document.addEventListener('DOMContentLoaded', function () {
    var editor = new Jodit('#editor', {
        // Your Jodit configuration here
        iframe: true, // Make sure iframe mode is enabled
    });

    // Wait for the editor's iframe to be ready
    editor.events.on('ready', function() {
        var iframeDoc = editor.editorDocument; // Get the iframe document

        // Create a <style> tag with your CSS
        var styleElement = iframeDoc.createElement('style');
        styleElement.type = 'text/css';
        styleElement.textContent = `
            body {
                font-family: 'Arial', sans-serif; /* Example custom style */
            }
            /* Add more custom styles here */
        `;

        // Append the <style> element to the iframe's <head>
        iframeDoc.head.appendChild(styleElement);

        // Alternatively, you can link an external stylesheet
        // var linkElement = iframeDoc.createElement('link');
        // linkElement.rel = 'stylesheet';
        // linkElement.href = 'URL_TO_YOUR_STYLESHEET';
        // iframeDoc.head.appendChild(linkElement);
    });
});
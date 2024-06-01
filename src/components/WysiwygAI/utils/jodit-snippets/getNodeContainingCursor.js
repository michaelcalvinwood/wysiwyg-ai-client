function getNodeContainingCursor(editor) {
    // Get the selection object
    const selection = editor.editorWindow.getSelection();

    // Check if there's a selection
    if (selection.rangeCount > 0) {
        // Get the first range of the selection
        const range = selection.getRangeAt(0);

        // Check if the range's startContainer is an element node and return it
        if (range.startContainer.nodeType === Node.ELEMENT_NODE) {
            return range.startContainer;
        } else {
            // Otherwise, return the parent node of the text node
            return range.startContainer.parentNode;
        }
    }

    return null; // Return null if there's no selection
}
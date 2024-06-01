function getCurrentSelection(editor) {
    // Get the current selection
    const selection = editor.selection;

    // Get the current node from the selection
    const currentSelection = selection.current();

    return currentSelection;
}

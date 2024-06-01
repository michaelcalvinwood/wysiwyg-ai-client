// Get the current selection object
var selection = editor.selection.sel;

// Get the focused node within the selection
var selectedNode = selection.focusNode;

// To get the parent element if the selection is within a text node
if (selectedNode.nodeType === Node.TEXT_NODE) {
    selectedNode = selectedNode.parentNode;
}

console.log(selectedNode);

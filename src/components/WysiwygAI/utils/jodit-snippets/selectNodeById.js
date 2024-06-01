// Assume you have a Jodit editor instance
var editor = Jodit.make('#editor');

// Function to select a node by ID within the editor
function selectNodeById(editor, id) {
    // Find the node within the editor's content
    var node = editor.editorWindow.document.getElementById(id);
    
    if (node) {
        // Use Jodit's selection module to set the selection
        editor.s.focus(node); // Focus the node
        
        // This selects the content of the node
        editor.s.select(node);
    } else {
        console.log('Node not found');
    }
}

// Example: Select a node with the ID 'targetNodeId'
selectNodeById(editor, 'targetNodeId');

// Assuming you have initialized the Jodit editor and have its instance
const editor = Jodit.make('#editor'); // Replace '#editor' with your editor's selector

// Create a new element/node to append
const newNode = document.createElement('p'); // Creating a <p> node for example
newNode.innerText = 'This is a new paragraph!'; // Adding some text to the new node

// Append the new node to the editor's content
// Access the editor's body where the content is actually stored
editor.editorDocument.body.appendChild(newNode);

// If you want the changes to be reflected in the editor's value
editor.setEditorValue(editor.editorDocument.body.innerHTML);

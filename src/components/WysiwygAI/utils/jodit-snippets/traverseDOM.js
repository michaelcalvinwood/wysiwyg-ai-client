function traverseDOM(node, func) {
    func(node); // Apply the function to the current node
    node = node.firstChild; // Get the first child
    while (node) {
        traverseDOM(node, func); // Recursively apply the function to each child node
        node = node.nextSibling; // Move to the next sibling
    }
}

// Example usage:
// Suppose you want to log each node's nodeName
traverseDOM(document.body, function(node) {
    console.log(node.nodeName);
});
export const insertNodeFromHTML = (html, editor) => {
    const el = editor.createInside.fromHTML(html);
    editor.s.insertNode(el);
}
export const adjustIframeDimensions = (width, editor) => {
    if (!editor) return;
    const doc = editor.editorDocument;
    const iframe = document.querySelector('iframe');
    iframe.style.minWidth = '900px';
    iframe.style.width = '900px';

}
export const addLinkToHeader = (editor, link) => {
    if (!editor) return;
    const doc = editor.editorDocument;
    const head = doc.querySelector('head');
    if (!head) return;


    const links = head.querySelectorAll('link');
    for (let i = 0; i < links.length; ++i) {
        const testHref = links[i].getAttribute('href');
        const testRel = links[i].getAttribute('rel');
        if (testHref === link.href && testRel === link.rel) {
            return;
        }
    }

    const el = document.createElement('link');
    for (const [key, value] of Object.entries(link)) {
        el.setAttribute(key, value);   
    }
  
    head.appendChild(el);
    const container = doc.querySelector('.jodit-wysiwyg_iframe');
}

export const addScriptToHeader = (editor, script) => {
    if (!editor) return;
    const doc = editor.editorDocument;
    const head = doc.querySelector('head');
    if (!head) return;

    const scripts = head.querySelectorAll('script');
    if (script.src) {
        for (let i = 0; i < scripts.length; ++i) {
            const testSrc = scripts[i].getAttribute('src');
            if (testSrc === script.src) {
                return;
            }
        }
    }
    if (script.innerText) {
        for (let i = 0; i < scripts.length; ++i) {
            const testTxt = scripts[i].innerText;
            if (testTxt === script.innerText) {
                console.log('skipped script innerText'); 
                return;
            }
        }
    }

    const el = document.createElement('script');
    for (const [key, value] of Object.entries(script)) {
        if (key === 'innerText') el.innerText = value;
        else el.setAttribute(key, value);   
    }
  
    head.appendChild(el);
    const container = doc.querySelector('.jodit-wysiwyg_iframe');   
}
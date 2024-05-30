import * as fileDownload from 'js-file-download';
import * as htmlToText from 'html-to-text';
import * as textFormatter from './textFormatter';
import { registerButton } from './registerButton';
import { joditAlert } from './alert';

const downloadHtml = (fileName, content) => {
    const title = fileName;
    if (!fileName.endsWith('.html')) fileName += '.html';
    
    const html = `
<!doctype html>
<html>
<head>
<title>${title}</title>

</head>
<body>
${content}
</body>
</html>`;
    
    
    fileDownload(html, fileName)

  }

  const downloadWord = async (fileName, html, login, servers) => {
    const title = fileName;
    if (!fileName.endsWith('.docx')) fileName += '.docx';
    
    const docx = await textFormatter.htmlToDocx(html, login, servers);
    console.log('docx', docx);
    fileDownload(docx, fileName);
  }

  const downloadPDF = (html) => {
    const wnd = window.open('about:blank', '', '_blank');
    wnd.document.write(html);
    wnd.print();
    wnd.close();
  }

  const downloadMarkdown = (fileName, html) => {
    const title = fileName;
    if (!fileName.endsWith('.md')) fileName += '.md';
    
    const turndownService = new TurndownService({headingStyle: 'atx'})
    const markdown = turndownService.turndown(html)
    
    fileDownload(markdown, fileName)
  }

  const downloadText = (fileName, html) => {
    const title = fileName;
    if (!fileName.endsWith('.txt')) fileName += '.txt';
    
    const text = htmlToText.convert(html);
    fileDownload(text, fileName)
  }
  export const addDownloadButton = (Jodit, {login, servers}) => {
    const name = "download";
    const tooltip = "Download";
    const iconURL = './src/assets/images/download.svg';
    const exec = null;
    const popup = (editor, current, self, close) => {
      const form = editor.create.fromHTML(shortCodes.downloadButtonForm());
      console.log('form', form)
      editor.e.on(form, 'submit', (e) => {
        e.preventDefault();
        const format = form.querySelector('select').value;
        const fileName = form.querySelector('input').value;
        if (!fileName) {
          joditAlert(Jodit, "Please provide a file name.", "Input Error")
          return;
        }
        const html = editor.value;
        switch (format) {
          case 'html':
            downloadHtml(fileName, html);
            break;
          case 'word':
            downloadWord(fileName, html, login, servers);
            break;
          case 'markdown':
            downloadMarkdown(fileName, html);
            break;
          case 'pdf':
            downloadPDF(html);
            break;
          case 'text':
            downloadText(fileName, html);
            break;
          default:
            joditAlert(Jodit, `Unsupported format: ${format}`, "Select Error")
        } 
        close();
      })
      return form;
    }
    registerButton(name, iconURL, tooltip, exec, popup, Jodit);
  }
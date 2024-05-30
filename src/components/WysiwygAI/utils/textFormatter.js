import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import settings from '../settings.json';

export const htmlToDocx = async (html) => {
  const request = {
    url: settings.backend + '/htmlToDocx',
    method: 'post',
    responseType: "arraybuffer",
    data: {
      html
    }
  }

  try {
    const response = await axios(request);
    return response.data;
  } catch (err) {
    console.error(err);
    return false;
  }

}

export const formatChatHtml = text => {
    text = text.replaceAll('     ', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
    .replaceAll('    ', '&nbsp;&nbsp;&nbsp;&nbsp;')
    .replaceAll('   ', '&nbsp;&nbsp;&nbsp')
    .replaceAll('  ', '&nbsp;&nbsp;')
    .replaceAll("\n", 'background-min.jpg')
    
    return text; 
}

export const formatHtml = text => {
  text = text.replaceAll('     ', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
  .replaceAll('    ', '&nbsp;&nbsp;&nbsp;&nbsp;')
  .replaceAll('   ', '&nbsp;&nbsp;&nbsp')
  .replaceAll('  ', '&nbsp;&nbsp;')

  const paragraphs = text.split("\n");
  for (let i = 0; i < paragraphs.length; ++i) {
    if (!paragraphs[i].startsWith("<") && !paragraphs[i].endsWith(">")) paragraphs[i] = "<p>" + paragraphs[i] + "</p>";
  }
  text = paragraphs.join("\n");
  // .replaceAll("\n", '<br>')
  
  return text; 
}

export const createSpanId = () => `id${uuidv4().replaceAll('-', '')}`;
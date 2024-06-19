import { registerButton } from "./registerButton";
import settings from "../settings.json";
import { v4 as uuidv4 } from 'uuid';

const models = [
  {
    id: 'fdeb15829dbaaf0243282a7b640c665b',
    model: 'gpt-4o',
    value: 'gpt-4o'
  },
  {
    id: 'd1b4e068735f89914dcea91226826552',
    model: 'gpt-4-turbo',
    value: 'gpt-4-turbo'
  },
  {
    id: '781d6d6fb66d9bda20e3d3d839e5fbe9',
    model: 'gpt-4',
    value: 'gpt-4'
  },
  {
    id: 'd65d5032f4f03a68965d50f2a90b9ab3',
    model: 'gpt-4-32k',
    value: 'gpt-4-32k'
  },
  {
    id: 'a06019b5f644713f052718037dce7945',
    model: 'gpt-3.5-turbo',
    value: 'gpt-3.5-turbo'
  },
  {
    id: '34095929d4f4b8a824b6b7e0a1635ee5',
    model: 'gpt-3.5-turbo-16k',
    value: 'gpt-3.5-turbo-16k'
  },
  
]

export const addChatButton = (Jodit, handleChat) => {
  const name = "chat";
  const tooltip = "Add Content via AI Chat";
  const iconURL = settings.svgFolder + "chat.svg";
  const exec = null;
  const popup = (editor, current, self, close) => {
    const form = editor.create.fromHTML(
      `<form class='jodit-chat-input' style="display: block">
        <textarea rows=5 placeholder="ChatGPT Prompt" style="width: 30rem; display: block; padding: .5rem 1rem;"></textarea>
        <select id="chatbotSelect" style="width: fit-content; display: block; margin: .5rem auto; cursor:pointer; padding: .25rem .5rem; font-size: 1.15rem;">
        </select>
        <button type="submit" style="display:block; padding: .5rem .75rem; width: fit-content; margin: auto">Insert</button>
      </form>`
    );
  
    const select = form.querySelector('select');
    for (let i = 0; i < models.length; ++i) {
      const option = document.createElement('option');
      option.setAttribute('value', models[i].value);
      option.innerText = models[i].model;
      select.appendChild(option);
    }

    editor.e.on(form, 'submit', (e) => {
      e.preventDefault();
      const command = form.querySelector('textarea').value;
      
      const chatbotId = select.value;

      const id = `id_${uuidv4()}`;
      console.log('chatbot', chatbotId);
      //editor.setEditorValue(editor.editorDocument.body.innerHTML);
      //editor.setEditorValue(`<div id="new">Hello</div>`);
      editor.s.insertHTML(`<div id="${id}"></div>`);
    
      handleChat({id, command, model: chatbotId})
      const el = document.querySelector('.jodit-toolbar-button_chat');
      const button = el.querySelector('button');
      if (el && button) button.click();
    });

    return form; 
  }

  registerButton(name, iconURL, tooltip, exec, popup, Jodit);
}
import { registerButton } from "./registerButton";
import settings from "../settings.json";
import { v4 as uuidv4 } from 'uuid';

export const addChatButton = (Jodit, handleChat) => {
  const name = "chat";
  const tooltip = "Add Content via AI Chat";
  const iconURL = settings.svgFolder + "chat.svg";
  const exec = null;
  const popup = (editor, current, self, close) => {
    const form = editor.create.fromHTML(
      `<form class='jodit-chat-input'>
        <select id="chatbotSelect" >
        </select>
        <textarea rows=5 placeholder="ChatGPT Prompt" style="width: 30rem; display: block; padding: .5rem 1rem;"></textarea>
        <button type="submit" style="display:block; padding: .5rem .75rem; width: fit-content; margin: auto">Insert</button>
      </form>`
    );

    console.log('close', close);
    editor.e.on(form, 'submit', (e) => {
      e.preventDefault();
      console.log('close2', close)
      const command = form.querySelector('textarea').value;
      const select = form.querySelector('select');
      const chatbotId = select.value;

      const id = `id_${uuidv4()}`;
      editor.s.insertHTML(`<stream id="${id}"></stream>`);
      handleChat({id, command, chatbotId})
      
    });

    return form; 
  }

  registerButton(name, iconURL, tooltip, exec, popup, Jodit);
}
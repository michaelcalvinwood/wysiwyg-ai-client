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
        <select id="chatbotSelect">
        </select>
        <textarea rows=5 placeholder="ChatGPT Prompt"></textarea>
        <button type="submit">Insert</button>
      </form>`
    );

    editor.e.on(form, 'submit', (e) => {
      e.preventDefault();
      const command = form.querySelector('textarea').value;
      const select = form.querySelector('select');
      const chatbotId = select.value;

      const id = `id_${uuidv4()}`;
      close();
      editor.s.insertHTML(`<stream id="${id}"></stream>`);
      handleChat({id, command, chatbotId})
      
    });

    return form; 
  }

  registerButton(name, iconURL, tooltip, exec, popup, Jodit);
}
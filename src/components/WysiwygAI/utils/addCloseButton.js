import { registerButton } from "./registerButton";
import settings from "../settings.json";

export const addCloseButton = (Jodit, handleClose) => {
    console.log('addCloseButton')
    const name = "closeEditor";
    const tooltip = "Close";
    const iconURL = settings.svgFolder + "close.svg";
    const exec = function(editor) {
      handleClose(editor);
      return;
    }
    const popup = null;
    registerButton(name, iconURL, tooltip, exec, popup, Jodit);
}
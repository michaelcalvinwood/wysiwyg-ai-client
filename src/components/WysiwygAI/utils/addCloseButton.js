import { registerButton } from "./registerButton";
export const addCloseButton = (Jodit, handleClose) => {
    const name = "closeEditor";
    const tooltip = "Close";
    const iconURL = "../svg/close.svg";
    const exec = function(editor) {
      handleClose();
      return;
    }
    const popup = null;
    registerButton(name, iconURL, tooltip, exec, popup, Jodit);
}
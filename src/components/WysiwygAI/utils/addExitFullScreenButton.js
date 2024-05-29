import { registerButton } from "./registerButton";
import settings from "../settings.json";

export const addExitFullscreenButton = (Jodit, handleExitFullScreen) => {
    const name = "exitFullscreen";
    const tooltip = "Exit Full Screen Mode";
    const iconURL = settings.svgFolder + "exit-fullscreen.svg";
    const exec = function(editor) {
      const html = editor.value;
      handleExitFullScreen(editor);
     

      return;
    }
    const popup = null;
    registerButton(name, iconURL, tooltip, exec, popup, Jodit);
  }

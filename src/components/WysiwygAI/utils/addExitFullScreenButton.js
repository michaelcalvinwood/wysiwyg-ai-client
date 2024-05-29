import { registerButton } from "./registerButton";
import settings from "../settings.json";

export const addExitFullscreenButton = (setFullsize, Jodit) => {
    const name = "exitFullscreen";
    const tooltip = "Exit Full Screen Mode";
    const iconURL = settings.svgFolder + "exit-fullscreen.svg";
    const exec = function(editor) {
      const html = editor.value;
      setFullsize(false);
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 150)

      return;
    }
    const popup = null;
    registerButton(name, iconURL, tooltip, exec, popup, Jodit);
  }

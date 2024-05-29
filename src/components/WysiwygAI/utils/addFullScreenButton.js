import { registerButton } from "./registerButton";
import settings from "../settings.json";

  export const addFullScreenButton = (Jodit, handleFullSize) => {
    const name = "useFullscreen";
    const tooltip = "Display in Full Screen";
    const iconURL = settings.svgFolder + "fullscreen.svg";
    const exec = function(editor) {
      handleFullSize(editor)
      return;
    }
    const popup = null;
    registerButton(name, iconURL, tooltip, exec, popup, Jodit);
  }
  
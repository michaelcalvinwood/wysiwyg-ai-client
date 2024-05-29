export const registerButton = (name, iconURL, tooltip, exec = null, popup = null, Jodit) => {
    Jodit.defaultOptions.controls[name] = {iconURL, tooltip}
    if (exec) Jodit.defaultOptions.controls[name].exec = exec;
    if (popup) Jodit.defaultOptions.controls[name].popup = popup;
}

export const unregisterButton = (buttonName, group, editor) => {
    const config = {
        name: buttonName,
        
    }
    console.log('buttonGroups unregister', config, editor)
    editor.unregisterButton(config);
    
}

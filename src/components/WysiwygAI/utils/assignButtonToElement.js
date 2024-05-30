export const assignButtonToElement = (Jodit, element, buttonName, tooltip) => {
    console.log('addElementPopup', element, Jodit.defaultOptions.popup)
    if (!Jodit.defaultOptions.popup[element]) {
        Jodit.defaultOptions.popup[element] = [{name: buttonName, tooltip}];
    } else if (Jodit.defaultOptions.popup[element].find(entry => entry.name === buttonName)) {
      const entry = Jodit.defaultOptions.popup[element].find(entry => entry.name === buttonName);
      entry.tooltip = tooltip;
    } else   
    {
        Jodit.defaultOptions.popup[element] = [
            {name: buttonName, tooltip},
            ...Jodit.defaultOptions.popup[element]
        ]
    }
}
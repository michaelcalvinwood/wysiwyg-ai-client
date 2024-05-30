export const joditPrompt = (Jodit, title, instructions, callback, placeholder = '', defaultValue = null) => {
    if (defaultValue) return Jodit.Prompt(instructions, title, callback, placeholder, defaultValue);
    if (placeholder) return Jodit.Prompt(instructions, title, callback, placeholder);
    return Jodit.Prompt(instructions, title, callback);
}

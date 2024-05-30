export const joditAlert = (Jodit, message, title = '', callback = null, className = '') => {
    if (title && callback && className) return Jodit.Alert(message, title, callback, className);
    if (title && callback) return Jodit.Alert(message, title, callback);
    if (title) return Jodit.Alert(message, title);
    return Jodit.Alert(message);
}
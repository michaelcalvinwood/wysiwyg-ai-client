const editor = new Jodit('#editor');

// Listen for a popup close event - replace 'closePopup' with the actual event name
editor.events.on('closePopup', function(popup) {
    console.log('Popup has closed', popup);
    // Execute any additional logic here after the popup has closed
});
import hotkeys from 'hotkeys-js';

hotkeys('f5', function(event, handler) {
    event.preventDefault();
    alert("F5 pressed and good!");
});
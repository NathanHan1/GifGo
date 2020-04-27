'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var electron_1 = require('electron');
function createWindow() {
  var win = new electron_1.BrowserWindow({
    width: 1200,
    height: 860,
    frame: false,
  });
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:3000');
    return;
  }
  // TODO
  win.loadFile('');
}
electron_1.app.whenReady().then(createWindow);

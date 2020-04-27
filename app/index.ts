import { app, BrowserWindow } from 'electron';

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 860,
    frame: false,
    // transparent: true,
    // webPreferences: {
    //   nodeIntegration: true,
    // },
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:3000');
    return;
  }
  // TODO
  win.loadFile('');
}

app.whenReady().then(createWindow);

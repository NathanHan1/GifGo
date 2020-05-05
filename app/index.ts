import { app, BrowserWindow } from 'electron';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    maximizable: false,
    opacity: 0.95,
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:3000');
    return;
  }
  // TODO
  win.loadFile('');
}

app.whenReady().then(createWindow);

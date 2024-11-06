const { app, BrowserWindow } = require('electron');
import { join } from 'path';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
    },
  });

  win.loadFile(join(__dirname, '../renderer/index.html'));
};

app.whenReady().then(() => {
  createWindow();
});

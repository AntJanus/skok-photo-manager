import { app, ipcMain, BrowserWindow } from 'electron';
import * as application from './src/index';
import * as fs from 'fs';
import * as path from 'path';

import { communicator } from './lib/electron-communicator/electron-communicator';

function createWindow() {
  let win = new BrowserWindow({ width: 800, height: 800 });

  console.log('Process', process.cwd());
  let filePath = path.resolve(process.cwd(), './dist/index.html');

  communicator(ipcMain);

  win.loadFile(filePath);
}

app.on('ready', createWindow);

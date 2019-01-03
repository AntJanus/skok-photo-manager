import { app, ipcMain, BrowserWindow } from 'electron';
import * as application from './src/index';
import * as fs from 'fs';
import * as path from 'path';

function createWindow() {
  let win = new BrowserWindow({ width: 800, height: 800 });

  console.log('Process', process.cwd());
  application.bootstrap();
  let filePath = path.resolve(process.cwd(), './dist/index.html');

  win.loadFile(filePath);
}

app.on('ready', createWindow);

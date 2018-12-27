import { app, BrowserWindow } from 'electron';
import * as application from './src/index';
import * as fs from 'fs';
import * as path from 'path';

function createWindow() {
  let win = new BrowserWindow({ width: 800, height: 600 });

  console.log('Process', process.cwd());
  let filePath = path.resolve(process.cwd(), './dist/index.html');
//  win.loadFile(filePath);

  win.loadURL('http://localhost:1234');
}

app.on('ready', createWindow);
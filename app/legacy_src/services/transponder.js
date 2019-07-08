import { ipcRenderer } from 'electron';
import { renderTransponder } from 'electron-transponder';

export const transponder = new renderTransponder(ipcRenderer);

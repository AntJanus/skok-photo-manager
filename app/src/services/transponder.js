import { ipcRenderer } from 'electron';
import { rendererTransponder } from 'electron-transponder';

export const transponder = new rendererTransponder(ipcRenderer);

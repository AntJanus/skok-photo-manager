import { ipcRenderer } from 'electron';
import { Transponder } from '../../../lib/electron-communicator/electron-communicator';

export const transponder = new Transponder(ipcRenderer);

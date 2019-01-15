import { dialog } from 'electron';

export function openFolder() {
  return new Promise((resolve, reject) => {
    dialog.showOpenDialog({
      properties: ['openDirectory']
    }, resolve);
  })
}

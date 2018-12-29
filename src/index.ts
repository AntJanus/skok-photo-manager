import { indexPhotos } from './actions/indexPhotos';
import { getPhotos } from './actions/getPhotos';

import { communicator } from '../lib/electron-communicator/electron-communicator';
import { ipcMain } from 'electron';

let comm = communicator(ipcMain);

communicator.register('GET', 'photos', async (req, res) => {
  let photos = await getPhotos(req.data.limit);

  res.send(200, photos);
});

communicator.register('POST', 'photos/index', async (req, res) => {
  await indexPhotos(req.data.path);

  res.send(200, {
    message: 'Photos indexed'
  });
});

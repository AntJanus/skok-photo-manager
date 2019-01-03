import { indexPhotos } from './actions/indexPhotos';
import { getPhotos } from './actions/getPhotos';

import { Communicator } from '../lib/electron-communicator/electron-communicator';
import { ipcMain } from 'electron';

let comm = new Communicator(ipcMain);

export function bootstrap() {
  console.log('Bootstrapping back-end');
  comm.register('GET', 'photos', async (req, res) => {
    let photos = await getPhotos(req.data.limit);

    res.send(200, photos);
  });

  comm.register('POST', 'photos/index', async (req, res) => {
    await indexPhotos(req.data.path);

    res.send(200, {
      message: 'Photos indexed'
    });
  });
}

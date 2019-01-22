import { indexPhotos } from './actions/indexPhotos';
import { getPhotos, getPhoto } from './actions/getPhotos';
import { openFolder } from './actions/openFolder';

import { Communicator } from '../lib/electron-communicator/electron-communicator';
import { ipcMain } from 'electron';

let comm = new Communicator(ipcMain);

export function bootstrap() {
  console.log('Bootstrapping back-end...');
  comm.register('GET', 'photos', async (req, res) => {
    let photos = await getPhotos(req.data.limit);

    res.send(photos);
  });

  comm.register('GET', 'photo', async (req, res) => {
    let photo = await getPhoto(req.data.id);

    if (photo.length === 0) {
      return res.send({ status: 404 });
    }

    res.send(photo[0]);
  });

  comm.register('POST', 'photos/index', async (req, res) => {
    let stats = await indexPhotos(req.data.path);

    res.send({
      message: 'Photos indexed',
      ...stats
    });
  });

  comm.register('GET', 'photos/open-folder', async (req, res) => {
    let result = await openFolder();

    res.send({
      path: result[0]
    })
  })
}

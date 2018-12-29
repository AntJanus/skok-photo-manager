import * as path from 'path';

import { walkPhotos } from '../../lib/skok-indexer/skok-indexer';
import { db } from '../db';

export async function indexPhotos(photoPath) {
  const date = new Date();

  await walkPhotos(photoPath, indexPhoto(photoPath, date, db));
}

function indexPhoto(photoPath, indexId, conn) {
  return (file, cb) => {

    conn('files').insert({
      ...file,
      index_id: indexId,
    })
    .then(() => {
      cb();
    })
  };
}

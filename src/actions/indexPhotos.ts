import * as path from 'path';

import { walkPhotos } from '../../lib/skok-indexer/skok-indexer';
import { db } from '../db';

interface File {
  name: string,
  file_name: string,
  full_path: string,
  file_type: string,
  size: number,
  hash: string
}

export async function indexPhotos(photoPath) {
  const date = new Date();

  return await walkPhotos(photoPath, indexPhoto(photoPath, date, db));
}

function indexPhoto(photoPath: string, indexId: any, conn) {
  return (file: File, cb) => {

    checkIfPhotoExists(file, conn)
      .then(exists => {
        if (exists) {
          return;
        }

        return conn('files').insert({
          ...file,
          index_id: indexId,
        });
      })
      .then(() => {
        cb();
      })
    };
}

function checkIfPhotoExists(file: File, conn): Promise<boolean> {
  return conn('files')
      .select('id')
      .where('full_path', file.full_path)
      .where('hash', file.hash)
      .then((files) => {
        if (files.length > 0) {
          return true;
        }

        return false;
      });
}

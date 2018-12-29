import { db } from '../db';

export function getPhotos(limit = 10) {
  return db('files')
    .select('*')
    .limit(limit);
}

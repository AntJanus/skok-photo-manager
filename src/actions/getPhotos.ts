import { db } from '../db';

export function getPhotos(limit = 10) {
  return db('files')
    .select('*')
    .limit(limit);
}

export function getPhoto(id: number) {
  return db('files')
    .select('*')
    .where('id', id)
    .limit(1);
}

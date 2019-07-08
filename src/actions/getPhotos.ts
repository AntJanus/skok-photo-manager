import { db } from '../db';

export function getPhotos(limit = 10, offset = 0) {
  let query =  db('files')
    .select('*')
    .offset(offset);

  if (limit > 0) {
    query = query.limit(limit);
  }

  return query;
}

export function getPhoto(id: number) {
  return db('files')
    .select('*')
    .where('id', id)
    .first();
}

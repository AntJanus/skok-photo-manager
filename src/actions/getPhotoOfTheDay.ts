import { db } from '../db';

export async function getPhotoOfTheDay(date = new Date()) {
  let simpleDate = `${date.getDate}/${date.getMonth() + 1}`;

  return await db('files')
    .where('simple_date', simpleDate)
    .first();
}

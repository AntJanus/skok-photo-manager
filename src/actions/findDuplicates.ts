import { db } from '../db';

export async function findDuplicates() {
  let allFiles = await db('files').select('*');
}

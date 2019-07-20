import { db } from '../src/db';

export async function setup() {
  return await resetDB();
}

export async function teardown() {
  return await resetDB();
}

async function resetDB() {
  return await db('files').truncate();
}

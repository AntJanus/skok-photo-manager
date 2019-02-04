import { groupBy } from 'lodash';
import { db } from '../db';

export async function findDuplicates() {
  let allFiles = await db('files').select('*');
  let fileGroups = groupBy(allFiles, 'hash');

  return Object.keys(fileGroups).filter(fileGroupKey => {
    return fileGroups[fileGroupKey].length > 1;
  });
}

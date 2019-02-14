import { findDuplicates } from "../../src/actions/findDuplicates";
import { db } from "../../src/db";

beforeEach(() => {
  db.batchInsert('files', [
    {
      file_name: 'file1.jpg',
      hash: '12345',
    },
    {
      file_name: 'file2.jpg',
      hash: '12345',
    },
    {
      file_name: 'file2.jpg',
      hash: '12345',
    }
  ])
});

afterEach(() => {
  db('files')
    .delete();
})

test('should find duplicates', async () => {
  let duplicates = findDuplicates();

  console.log('Duplicates: ', duplicates);
});

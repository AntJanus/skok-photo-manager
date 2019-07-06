import { findDuplicates } from "../../src/actions/findDuplicates";
import { db } from "../../src/db";

beforeEach(async () => {
  await db('files').delete();
  await db.batchInsert('files', [
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
  let duplicates = await findDuplicates();

  expect(duplicates.length).toBe(1);
  expect(duplicates[0].length).toBe(3);

  duplicates[0].forEach(duplicate => {
    expect(duplicate.hash).toBe('12345');
  });
});

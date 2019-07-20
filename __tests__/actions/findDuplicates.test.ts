import { findDuplicates } from '../../src/actions/findDuplicates';
import { db } from '../../src/db';
import { setup } from '../../__test_helpers__/helpers';

beforeEach(async () => {
  await setup();
  return await db.batchInsert('files', [
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
    },
  ]);
});

describe('findDuplicates', () => {
  test('should find duplicates', async () => {
    let duplicates = await findDuplicates();

    expect(duplicates.length).toBe(1);
    expect(duplicates[0].length).toBe(3);

    duplicates[0].forEach(duplicate => {
      expect(duplicate.hash).toBe('12345');
    });
  });
});

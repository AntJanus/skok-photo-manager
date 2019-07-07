import { getPhotoOfTheDay } from '../../src/actions/getPhotoOfTheDay';
import { db } from '../../src/db';

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
      simple_date: '23/7',
    },
    {
      file_name: 'file2.jpg',
      hash: '12345',
    },
  ]);
});

afterEach(() => {
  db('files').delete();
});

describe('getPhotoOfTheDay', () => {
  test('should find photo of the day', async () => {
    const date = new Date('7/23/2018');
    const photo = await getPhotoOfTheDay(date);

    expect(photo.file_name).toBe('file2.jpg');
  });
});

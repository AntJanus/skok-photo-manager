import { getPhotos, getPhoto } from '../../src/actions/getPhotos';
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

describe('getPhotos', () => {
  describe('getPhotos', () => {
    test('should get photos', async () => {
      const photos = await getPhotos();

      expect(photos.length).toBe(3);
    });

    test('should get photos in limit', async () => {
      const limit = 2;
      const photos = await getPhotos(limit);

      expect(photos.length).toBe(2);
    });

    test('should get photos based off offset', async () => {
      const limit = 0;
      const offset = 2;
      const photos = await getPhotos(limit, offset);

      expect(photos.length).toBe(1);
    });
  });

  describe('getPhoto', () => {
    test('should get individual photo', async () => {
      const photos = await getPhotos(1);
      const photo = await getPhoto(photos[0].id);

      expect(photo.name).toBe(photos[0].name);
    });
  });
});

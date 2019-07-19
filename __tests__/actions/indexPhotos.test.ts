import { indexPhotos } from '../../src/actions/indexPhotos';
import * as path from 'path';
import { setup } from '../../__test_helpers__/helpers';
import { db } from '../../src/db';
import { omit } from 'lodash';

beforeEach(async () => {
  await setup();
});

describe('indexPhotos', () => {
  test('should walk photo path', async () => {
    const fixturePath = path.join(__dirname, '../', 'fixtures');

    const photos = await indexPhotos(fixturePath);

    expect(photos.totalPhotos).toBe(1);
  });

  test('should save data about files', async () => {
    const fixturePath = path.join(__dirname, '../', 'fixtures');

    await indexPhotos(fixturePath);

    const photos = await db('files').select('*');
    const photo = photos[0];

    const photoData = omit(photo, ['created_at', 'full_path', 'id', 'index_id', 'updated_at']);

    expect(photoData).toStrictEqual({
      file_name: 'test.jpg',
      file_type: 'jpg',
      hash: 'd41d8cd98f00b204e9800998ecf8427e',
      name: 'test',
      simple_date: null,
      simple_day: 17,
      simple_month: 7,
      simple_year: 2019,
      size: 0,
      thumbnail_path: null,
      tiny_thumbnail: null
    });
  });
});

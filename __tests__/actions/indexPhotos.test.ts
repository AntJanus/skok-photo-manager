import { indexPhotos } from '../../src/actions/indexPhotos';
import * as path from 'path';
import { setup } from '../../__test_helpers__/helpers';

beforeEach(async () => {
  await setup();
});

describe('indexPhotos', () => {
  test('should walk photo path', async () => {
    const fixturePath = path.join(__dirname, '../', 'fixtures');

    const photos = await indexPhotos(fixturePath);

    expect(photos.totalPhotos).toBe(1);
  });
});

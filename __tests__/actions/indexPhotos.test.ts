import { indexPhotos } from '../../src/actions/indexPhotos';

describe('indexPhotos', () => {
  test('should walk photo path', async () => {
    const path = __dirname;

    const photos = await indexPhotos(path);
  });
});

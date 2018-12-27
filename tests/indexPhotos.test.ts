import * as path from 'path';
import { indexPhotos } from '../src/index';

console.log('Indexing photos');
indexPhotos(path.resolve('./tests/images'))
  .then(() => {
    console.log('Data saved!');
  })
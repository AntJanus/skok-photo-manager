import path from 'path';
import walker from 'walk-tree';

interface Visitor {
  (type: 'file' | 'folder', data: any): any;
}

export function walkPhotos(photoPath: string, visitor: Visitor) {
  return new Promise((resolve, reject) => {
    walker(photoPath)
      .on('folder', folder => {
        visitor('folder', folder);
      })
      .on('file', file => {
        visitor('file', file);
      })
      .on('end', resolve)
      .on('error', reject);
  });
}
import * as path from 'path';
import * as fs from 'fs';
import * as walker from 'walker';

interface Visitor {
  (data: any, cb: {():any}): any;
}

export function walkPhotos(photoPath: string, visitor: Visitor) {
  return new Promise((resolve, reject) => {
    let queuedPromises = 0;
    let total = 0;

    walker(photoPath)
      .on('file', file => {
        queuedPromises++;
        let stats = fs.statSync(file);

        let fileObj = constructFileObject(file, stats);

        visitor(fileObj, () => queuedPromises--);
        total++;
      })
      .on('end', () => {
        resolve({
          totalPhotos: total
        })
      })
      .on('error', reject);
  });
}

function constructFileObject(file, stats) {
  let parsedPath = path.parse(file);

  return {
    name: parsedPath.name,
    file_name: parsedPath.base,
    full_path: path.resolve(file),
    file_type: parsedPath.ext.slice(1).toLowerCase(),
    size: stats.size,
    created_at: new Date(stats.birthtime),
    updated_at: new Date(stats.mtime),
  };
}

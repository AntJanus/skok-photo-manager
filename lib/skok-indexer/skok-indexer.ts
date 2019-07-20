import * as path from 'path';
import * as fs from 'fs';
import * as walker from 'walker';
import * as md5File from 'md5-file';

interface Visitor {
  (data: any, cb: {():any}): any;
}

interface WalkPhotosResult {
  totalPhotos: number
}

export function walkPhotos(photoPath: string, visitor: Visitor): Promise<WalkPhotosResult> {
  return new Promise((resolve, reject) => {
    let queuedPromises = 0;
    let total = 0;

    walker(photoPath)
      .on('file', file => {
        queuedPromises++;
        let stats = fs.statSync(file);
        let md5 = md5File.sync(file);

        let fileObj = constructFileObject(file, stats, md5);

        visitor(fileObj, () => queuedPromises--);
        total++;
      })
      .on('end', () => {
        process.nextTick(() => {
          resolve({
            totalPhotos: total
          });
        });
      })
      .on('error', reject);
  });
}

function constructFileObject(file, stats, md5) {
  let parsedPath = path.parse(file);

  return {
    name: parsedPath.name,
    file_name: parsedPath.base,
    full_path: path.resolve(file),
    file_type: parsedPath.ext.slice(1).toLowerCase(),
    size: stats.size,
    hash: md5,
    created_at: new Date(stats.birthtime),
    updated_at: new Date(stats.mtime),
  };
}

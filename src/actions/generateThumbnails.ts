import sharp from 'sharp';
import path from 'path';

import { db } from '../db';

interface ProgressObj {
  total: number,
  current: number,
  name: string,
}

interface ProgressCallback {
  (progress: ProgressObj):  void
}

const largeImageOptions = {
  width: 250,
  height: 250,
  fit: sharp.fit.inside,
  withoutEnlargement: true,
};

const smallImageOptions = {
  width: 100,
  height: 100,
  fit: sharp.fit.inside,
  withoutEnlargement: true,
};

let basePath = path.resolve(process.cwd(), './thumbnails');

export async function generateThumbnails(progressCallback: ProgressCallback) {
  let photos = await db('files').select('*');
  let photosTotal = photos.length;
  let currentIteration = 0;

  progressCallback({
    total: photosTotal,
    current: currentIteration,
    name: ''
  });

  for (const photo of photos) {
    currentIteration++;

    let thumbnail = await generateThumbnail(photo.file_name, photo.path);

    await db('files')
      .where('id', photo.id)
      .update({
        thumbnail_path: thumbnail.path,
        tiny_thumbnail: thumbnail.base64thumb,
      });

    progressCallback({
      total: photosTotal,
      current: currentIteration,
      name: photo.file_name
    });
  }
}

async function generateThumbnail(photoName, photoPath: string) {
  let newPath = path.resolve(basePath, `${photoName}-${Date.now()}.jpg`);
  let largeThumbnail = await sharp(photoPath)
    .resize(largeImageOptions)
    .toFormat('jpeg')
    .toFile(newPath);

  let smallThumbnail = await sharp(photoPath)
    .resize(smallImageOptions)
    .toFormat('jpeg')
    .toBuffer();

  let base64Thumb = smallThumbnail.toString('base64');

  return await {
    path: newPath,
    base64thumb: base64Thumb
  };
}

import React, { useEffect, useState } from 'react';
import { transponder } from '../services/transponder';
import { GalleryImage } from '../components/gallery/GalleryImage';
import { Pagination } from '../components/gallery/Pagination';

function getPhotos(setPhotos) {
  transponder
    .send('GET', 'photos', {
      limit: 30,
    })
    .then(data => {
      setPhotos(data);
    });
}

export function GalleryRoute() {
  let [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos(setPhotos);
  });

  return (
    <div className="gallery-container">
      {/* <GalleryViewChooser /> */}
      <div>
        {photos.map(photo => (
          <GalleryImage photo={photo} key={photo.id} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { transponder } from '../services/transponder';
import { GalleryImage } from '../components/gallery/GalleryImage';
import { Pagination } from '../components/gallery/Pagination';

function usePhotos() {
  let [photos, setPhotos] = useState([]);

  useEffect(() => {
    transponder
      .send('GET', 'photos', {
        limit: 30,
      })
      .then(data => {
        setPhotos(data);
      });
  }, []);

  return photos;
}

export function GalleryRoute() {
  const photos = usePhotos();
  const perPage = 9;
  const offset = 0;

  return (
    <div>
      <div className="gallery-container">
        {/* <GalleryViewChooser /> */}
        {photos.map(photo => (
          <GalleryImage photo={photo} key={photo.id} />
        ))}
      </div>
      <hr />
      <Pagination total={photos.length} perPage={perPage} offset={offset} />
    </div>
  );
}

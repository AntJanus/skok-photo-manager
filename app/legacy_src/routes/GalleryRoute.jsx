import React, { useEffect, useState } from 'react';
import { transponder } from '../services/transponder';
import { GalleryImage } from '../components/gallery/GalleryImage';
import { Pagination } from '../components/gallery/Pagination';

function usePhotos(offset, perPage) {
  let [photos, setPhotos] = useState([]);

  useEffect(() => {
    transponder
      .send('GET', 'photos', {
        limit: perPage,
        offset,
      })
      .then(data => {
        setPhotos(data);
      });
  }, [offset, perPage]);

  return photos;
}

export function GalleryRoute() {
  const offset = 0;
  const perPage = 9;
  const photos = usePhotos(offset, perPage);

  return (
    <div>
      <div className="gallery-container">
        {photos.map(photo => (
          <GalleryImage photo={photo} key={photo.id} />
        ))}
      </div>
      <hr />
      <Pagination total={photos.length} perPage={perPage} offset={offset} />
    </div>
  );
}

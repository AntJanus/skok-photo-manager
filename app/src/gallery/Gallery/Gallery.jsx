import React, { useEffect, useState } from 'react';
import { transponder } from '../../services/transponder';
import { Pagination } from '../../shared/components/Pagination/Pagination';
import { Link } from 'react-router-dom';

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

function usePagination(perPage) {
  const [page, setPage] = useState(0);

  return [
    {
      offset: page * perPage,
      currentPage: page
    },
    setPage
  ];
}

function GalleryItem({ photo }) {
  return (
    <div className="gallery-image">
      <Link to={`/gallery/${photo.id}`}>
        <img src={photo.full_path} />
      </Link>
    </div>
  );
}

export function Gallery() {
  const perPage = 9;
  const [pagination, setPage] = usePagination(perPage);
  const { offset } = pagination;
  const onPageChange = (destinationPage) => setPage(destinationPage);
  const photos = usePhotos(offset, perPage);

  return (
    <div>
      <div className="gallery-container">
        {photos.map(photo => (
          <GalleryItem photo={photo} key={photo.id} />
        ))}
      </div>
      <hr />
      <Pagination total={photos.length} perPage={perPage} offset={offset} onPageChange={onPageChange} />
    </div>
  );
}

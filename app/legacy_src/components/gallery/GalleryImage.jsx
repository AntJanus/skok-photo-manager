import React from 'react';

import { Link} from 'react-router-dom';

export function GalleryImage({ photo }) {
  return (
    <div className="gallery-image">
      <Link to={`/gallery/${photo.id}`}>
        <img src={photo.full_path} />
      </Link>
    </div>
  );
}

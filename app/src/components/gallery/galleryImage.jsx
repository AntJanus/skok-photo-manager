import React from 'react';

import { Link} from 'react-router-dom';

export function GalleryImage(props) {
  return (
    <div className="gallery-image">
      <Link to={`/gallery/${props.photo.id}`}>
        <img src={props.photo.full_path} />
      </Link>
    </div>
  );
}

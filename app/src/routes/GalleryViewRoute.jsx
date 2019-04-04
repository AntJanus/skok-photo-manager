import React, { useEffect, useState } from 'react';
import { transponder } from '../services/transponder';

function getImageData(id) {
  return transponder
      .send('GET', 'photo', {
        id
      });
}

export function GalleryViewRoute(props) {
  let [imageData, setImageData] = useState({});

  useEffect(() => {
    getImageData(props.match.params.id)
      .then(setImageData);
  }, [props.match.params.id]);

    return (
      <div className="gallery-single-image">
        <div className="gallery-image-descr">
          <h3>{imageData.name}</h3>
          <ul>
            <li>
              <strong>File name: </strong>
              {imageData.file_name}
            </li>
            <li>
              <strong>Size: </strong>
              {(imageData.size || 0) / 8 / 1024}mb
            </li>
            <li>
              <strong>Created at: </strong>
              {new Date(imageData.created_at).toDateString()}
            </li>
            <li>
              <strong>Full path: </strong>
              {imageData.full_path}
            </li>
          </ul>
        </div>
        <img src={imageData.full_path} />
      </div>
    );
}

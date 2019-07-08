import React from 'react';

import { transponder } from '../../services/transponder';

export function FolderIndex({ path, handleIndex }) {
  const indexPhotos = () => {
    transponder
      .send('POST', 'photos/index', {
        path: path
      })
      .then(data => {
        handleIndex(data.totalPhotos);
      });
  };

  return (
    <div>
      <p>
        You've selected the path:
        <br />
        <strong>{path}</strong>
      </p>
      <div>
        <a className="button-primary" onClick={indexPhotos}>
          Scan directory
        </a>
      </div>
    </div>
  );
}

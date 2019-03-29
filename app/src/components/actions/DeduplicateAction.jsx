import React, { useState } from 'react';
import { transponder } from '../../services/transponder';

export function DeduplicateAction() {
  const [photos, setPhotos] = useState([]);
  const findDuplicates = () => {
    transponder
      .send('POST', 'actions/deduplicate', {})
      .then(data => {
        setPhotos({
          photos: data.photos,
        });
      });
  };

  return (
    <div>
      <h1>Deduplicate Action</h1>
      <p>The deduplicate action will scan your already indexed photos and attempt to find any potential duplicates based on the photos' MD5 hashes. Before deduplicating, the scan will display all duplicates.</p>
      <a className="button-primary" onClick={findDuplicates}>
        Find duplicates
      </a>
    </div>
  );
}

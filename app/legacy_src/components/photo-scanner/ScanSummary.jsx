import React from 'react';

export function ScanSummary({ indexed: indexed, totalPhotos: totalPhotos }) {
  return (
    <div>
      {
        indexed &&
        <p>Your photos have been indexed with a total of {totalPhotos} photos.</p>
      }
    </div>
  );
}

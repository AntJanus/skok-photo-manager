import React from 'react';

export function ScanSummary(props) {
  return (
    <div>
      {
        props.indexed &&
        <p>Your photos have been indexed witha  total of {props.totalPhotos} photos.</p>
      }
    </div>
  );
}

import React, { useState } from 'react';

import { ScanSummary } from '../scanner/ScannerSummary/ScannerSummary';
import { FolderIndex } from '../scanner/FolderIndex/FolderIndex';
import { FolderSelect } from '../shared/components/FolderSelect/FolderSelect';

function handlePathHook(setState) {
  return path => {
    setState({
      indexed: false,
      path: path,
      selectedFolder: true,
    });
  };
}

function handleIndexHook(setState) {
  return totalPhotos => {
    setState({
      indexed: true,
      selectedFolder: false,
      totalPhotos: totalPhotos,
      path: '',
    });
  };
}

export function PhotoIndexRoute() {
  let [state, setState] = useState({
    path: '',
    selectedFolder: false,
    indexed: false,
  });

  const handlePath = handlePathHook(setState);
  const handleIndex = handleIndexHook(setState);

  return (
    <div>
      <ScanSummary indexed={state.indexed} totalPhotos={state.totalPhotos} />

      {state.selectedFolder ? (
        <FolderIndex path={state.path} handleIndex={handleIndex} />
      ) : (
        <FolderSelect handlePath={handlePath} />
      )}
    </div>
  );
}

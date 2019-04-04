import { useState }, React from 'react';

import { ScanSummary } from './ScanSummary';
import { FolderIndex } from './FolderIndex';
import { FolderSelect } from './FolderSelect';

function handlePathHook(setState) {
  return (path) => {
    setState({
      indexed: false,
      path: path,
      selectedFolder: true,
    });
  }
}

function handleIndexHook(setState) {
  return (totalPhotos) => {
    setState({
      indexed: true,
      selectedFolder: false,
      totalPhotos: totalPhotos,
      path: '',
    });
  }
}

export function PhotoIndexRoute() {
  let [state, setState] = useState({
    path: '',
    selectedFolder: false,
    indexed: false
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

import React from 'react';

import { transponder } from '../services/transponder';

export function FolderSelect({ path: path, handlePath: handlePath }) {
    const openFolder = transponder.send('GET', 'photos/open-folder', {}).then(data => {
      handlePath(data.path);
    });

    return (
      <a className="button-primary" onClick={openFolder}>
        Pick a directory
      </a>
    );
}

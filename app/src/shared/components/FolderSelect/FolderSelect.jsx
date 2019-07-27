import React from 'react';

import { transponder } from '../../../services/transponder';

export function FolderSelect({ handlePath: handlePath }) {
    const openFolder = () => transponder.send('GET', 'photos/open-folder', {}).then(data => {
      handlePath(data.path);
    });

    return (
      <button type="button" className="btn btn-primary" onClick={openFolder}>
        Pick a directory
      </button>
    );
}

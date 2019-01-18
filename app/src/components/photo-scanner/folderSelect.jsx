import React from 'react';

import { transponder } from '../../services/transponder';

export class FolderSelect extends React.Component {
  constructor(props) {
    super(props);

    this.openFolder = this.openFolder.bind(this);
  }

  openFolder() {
    transponder.send('GET', 'photos/open-folder', {}).then(data => {
      this.props.handlePath(data.path);
    });
  }

  render() {

    return (
          <div>
            <p>
              Select a directory to be scanned. Photos and files will be scanned
              into a database and the gallery will make those available. This
              process may take a while.
            </p>
            <a href="#" className="button-primary" onClick={this.openFolder}>
              Pick a directory
            </a>
          </div>
    );
  }
}

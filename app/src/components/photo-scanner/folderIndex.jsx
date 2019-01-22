import React from 'react';

import { transponder } from '../../services/transponder';

export class FolderIndex extends React.Component {
  constructor(props) {
    super(props);

    this.indexPhotos = this.indexPhotos.bind(this);
  }

  indexPhotos() {
    transponder
      .send('POST', 'photos/index', {
        path: this.props.path
      })
      .then(data => {
        this.props.handleIndex(data.totalPhotos);
      });
  }

  render() {

    return (
          <div>
            <p>
              You've selected the path:
              <br />
              <strong>{this.props.path}</strong>
            </p>
            <div>
              <a className="button-primary" onClick={this.indexPhotos}>
                Scan directory
              </a>
            </div>
          </div>
    );
  }
}

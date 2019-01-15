import React from 'react';

import { transponder } from '../services/transponder';

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: '',
      selectedFolder: false,
    };

    this.openFolder = this.openFolder.bind(this);
  }

  getPhotos() {
    transponder.send('GET', 'photos', {}).then(data => {
      console.log('Response: ', data);
    });
  }

  openFolder() {
    transponder.send('GET', 'photos/open-folder', {}).then(data => {
      console.log('Data: ', data);
      this.setState({
        path: data.path,
        selectedFolder: true,
      });
    });
  }

  indexPhotos() {
    transponder
      .send('POST', 'photos/index', {
        path: '.',
      })
      .then(data => {
        console.log('Response: ', data);
      });
  }

  render() {
    return (
      <main>
        {this.state.selectedFolder ? (
          <div>
            <p>
              You've selected the path:
              <br />
              <strong>{this.state.path}</strong>
            </p>
            <div>
              <a href="#" className="button-primary" onClick={this.indexPhotos}>
                Scan directory
              </a>
            </div>
          </div>
        ) : (
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
        )}
      </main>
    );
  }
}

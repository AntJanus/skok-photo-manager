import React from 'react';

import { ScanSummary } from './ScanSummary';
import { FolderIndex } from './FolderIndex';
import { FolderSelect } from './FolderSelect';

export class PhotoIndexRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: '',
      selectedFolder: false,
      indexed: false
    };

    this.handlePath = this.handlePath.bind(this);
    this.handleIndex = this.handleIndex.bind(this);
  }

  handlePath(path) {
    this.setState({
      indexed: false,
      path: path,
      selectedFolder: true,
    });
  }

  handleIndex(totalPhotos) {
    this.setState({
      indexed: true,
      selectedFolder: false,
      totalPhotos: totalPhotos,
      path: '',
    });
  }

  render() {
    return (
      <div>
        <ScanSummary indexed={this.state.indexed} totalPhotos={this.state.totalPhotos} />

        {this.state.selectedFolder ? (
          <FolderIndex path={this.state.path} handleIndex={this.handleIndex} />
        ) : (
          <FolderSelect handlePath={this.handlePath} />
        )}
      </div>
    );
  }
}

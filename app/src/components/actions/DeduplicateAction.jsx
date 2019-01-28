import React from 'react';
import { transponder } from '../../services/transponder';

export class DeduplicateAction extends React.Component {
  constructor(props) {
    super(props);

    this.findDuplicates = this.findDuplicates.bind(this);
    this.state = {
      photos: []
    }
  }

  findDuplicates() {
    transponder
      .send('POST', 'actions/deduplicate', {})
      .then(data => {
        this.setState({
          photos: data.photos,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Deduplicate Action</h1>
        <p>The deduplicate action will scan your already indexed photos and attempt to find any potential duplicates based on the photos' MD5 hashes. Before deduplicating, the scan will display all duplicates.</p>
        <a className="button-primary" onClick={this.findDuplicates}>
          Find duplicates
        </a>
      </div>
    );
  }
}

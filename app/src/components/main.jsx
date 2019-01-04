import React from "react";

import { transponder } from '../services/transponder';

export class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  getPhotos() {
    transponder.send('GET', 'photos', {})
      .then(data => {
        console.log('Response: ', data);
      })
  }

  indexPhotos() {
    transponder.send('POST', 'photos/index', {
      path: '.'
    })
      .then(data => {
        console.log('Response: ', data);
      })
  }

  render() {
    return (
      <main>
        <div>
          <input type="text" placeholder="Enter path" />
        </div>
        <br />
        <a href="#" className="button-primary" onClick={this.indexPhotos}>
          Scan photo directory
        </a>
        <a href="#" className="button-primary" onClick={this.getPhotos}>
          Get indexed photos
        </a>
      </main>
    );
  }
}

import React from "react";

import { transponder } from "../services/transponder";

export class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  getPhotos() {
    transponder.send("GET", "photos", {}).then(data => {
      console.log("Response: ", data);
    });
  }

  indexPhotos() {
    transponder
      .send("POST", "photos/index", {
        path: "."
      })
      .then(data => {
        console.log("Response: ", data);
      });
  }

  render() {
    return (
      <main>
        <div>
          <p>
            Select a directory to be scanned. Photos and files will be scanned
            into a database and the gallery will make those available. This
            process may take a while.
          </p>
          <input type="file" placeholder="Enter path" directory multiple />
        </div>
        <br />
        <a href="#" className="button-primary" onClick={this.indexPhotos}>
          Scan directory
        </a>
      </main>
    );
  }
}

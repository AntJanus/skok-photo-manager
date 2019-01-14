import React from "react";

import { transponder } from "../services/transponder";

export class Navigation extends React.Component {
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
      <nav>
        <ul>
          <li class="active-link">
            <a href="#">
              <span className="fas fa-file-alt" /> Index Photos
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fas fa-camera" />
              Gallery
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fas fa-cogs" />
              Settings
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fas fa-info-circle" />
              Info
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

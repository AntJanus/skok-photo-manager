import React from "react";
import { NavLink } from 'react-router-dom';

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
          <li>
            <NavLink to="/" exact activeClassName="active-link">
              <span className="fas fa-calendar-day" /> Photo of the Day
            </NavLink>
          </li>
          <li>
            <NavLink to="/photo-index" activeClassName="active-link">
              <span className="fas fa-file-alt" /> Index Photos
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" activeClassName="active-link">
              <span className="fas fa-camera" />
              Gallery
            </NavLink>
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

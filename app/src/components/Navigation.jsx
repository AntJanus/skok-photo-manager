import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navigation() {
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
          <NavLink to="/actions" activeClassName="active-link">
            <span className="fas fa-compress-arrows-alt" />
            Actions
          </NavLink>
        </li>
        <li>
          <a href="#">
            <span className="fas fa-cogs" />
            Settings
          </a>
        </li>
        <li>
          <NavLink to="/info" activeClassName="active-link">
            <span className="fas fa-info-circle" />
            Info
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

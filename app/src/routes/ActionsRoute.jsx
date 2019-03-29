import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { DeduplicateAction } from '../components/actions/DeduplicateAction';
import { ReorganizeAction } from '../components/actions/ReorganizeAction';

export function ActionsRoute() {
  return (
    <div>
    <h1>Choose an action</h1>
      <ul>
        <li>
          <NavLink to="/actions/deduplicate">
          Deduplicate
          </NavLink>
        </li>
        <li>
          <NavLink to="/actions/reorganize">
          Reorganize
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/actions/deduplicate" component={DeduplicateAction} />
        <Route path="/actions/reorganize" component={ReorganizeAction} />
        {/*
        <Route path="/actions/search" component={} />
        */}
      </Switch>
    </div>
  )
}

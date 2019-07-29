import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { transponder } from '../services/transponder';
import { Gallery } from './Gallery/Gallery';
import { GalleryByDate } from './GalleryByDate/GalleryByDate';
import { GalleryViewRoute } from './GalleryViewRoute';


function usePagination(perPage) {
  const [page, setPage] = useState(0);

  return [
    {
      page,
      offset: perPage * page,
      perPage,
    },
    setPage
  ];
}

export function GalleryRoute({ match }) {
  return (
    <Switch>
      <Route
        exact
        path={`${match.path}`}
        component={Gallery}/>
      <Route
        exact
        path={`${match.path}/:id`}
        component={GalleryByDate} />
      <Route
        exact
        path={`${match.path}/bydate`}
        component={GalleryByDate} />
    </Switch>
  );
}

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PhotoIndexRoute } from './PhotoRoute';
import { GalleryRoute } from './GalleryRoute';
import { GalleryViewRoute } from './GalleryViewRoute';
import { ActionsRoute } from './ActionsRoute';
import { InfoRoute } from './InfoRoute';

const Index = () => <p>Could not find a photo of the day.</p>;

export function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/photo-index" component={PhotoIndexRoute} />
      <Route exact path="/gallery" component={GalleryRoute} />
      <Route path="/gallery/:id" component={GalleryViewRoute} />
      <Route path="/actions" component={ActionsRoute} />
      <Route path="/info" component={InfoRoute} />
    </Switch>
  );
}

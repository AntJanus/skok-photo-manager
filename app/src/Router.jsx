import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PhotoIndexRoute } from './gallery/PhotoRoute';
import { GalleryRoute } from './gallery/GalleryRoute';
import { GalleryViewRoute } from './gallery/GalleryViewRoute';
import { ActionsRoute } from './photoActions/ActionsRoute';
import { InfoRoute } from './info/InfoRoute';

const Index = () => <p>Could not find a photo of the day.</p>;
const NotFoundRoute = () => <p>Invalid view</p>;
const SettingsRoute = () => <p>Settings WIP</p>;

export function AppRouter(props) {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/photo-index" component={PhotoIndexRoute} />
      <Route path="/gallery" component={GalleryRoute} />
      <Route path="/gallery/:id" component={GalleryViewRoute} />
      <Route path="/actions" component={ActionsRoute} />
      <Route path="/settings" component={SettingsRoute} />
      <Route path="/info" component={InfoRoute} />
      <Route path="*" component={NotFoundRoute} />
    </Switch>
  );
}

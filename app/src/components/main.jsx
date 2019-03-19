import React from 'react';
import { Switch, Route} from 'react-router-dom';

import { PhotoIndexRoute } from './photo-scanner/PhotoRoute';
import { GalleryRoute } from './simple-gallery/GalleryRoute';
import { GalleryViewRoute } from './simple-gallery/GalleryViewRoute';
import { ActionsRoute } from './actions/ActionsRoute';

const Index = () => <p>Could not find a photo of the day.</p>;

export class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/photo-index" component={PhotoIndexRoute} />
          <Route exact path="/gallery" component={GalleryRoute} />
          <Route path="/gallery/:id" component={GalleryViewRoute} />
          <Route path="/actions" component={ActionsRoute} />
        </Switch>
      </main>
    );
  }
}

import React from 'react';
import { Switch, Route} from 'react-router-dom';

import { PhotoIndexRoute } from './photo-scanner/photoRoute';
import { GalleryRoute } from './gallery/galleryRoute';
import { GalleryViewRoute } from './gallery/galleryViewRoute';

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
        </Switch>
      </main>
    );
  }
}

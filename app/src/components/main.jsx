import React from 'react';
import { Route} from 'react-router-dom';

import { PhotoIndexRoute } from './routes/photo-index';

const Index = () => <h1>Welcome!</h1>;

export class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Route path="/" exact component={Index} />
        <Route path="/photo-index" component={PhotoIndexRoute} />
      </main>
    );
  }
}

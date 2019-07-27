import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { AppRouter } from './Router';
import { Navigation, Header } from './ui';

export function App() {
  return (
    <Router>
      <Header />
      <div className="grid-container">
        <Navigation />
        <main>
          <AppRouter />
        </main>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { AppRouter } from './Router';
import { Navigation } from './ui/components/Navigation/Navigation';

export function App() {
  return (
    <Router>
      <div className="grid-container">
        <main>
          <AppRouter />
        </main>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

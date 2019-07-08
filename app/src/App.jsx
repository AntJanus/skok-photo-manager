import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <div className="grid-container">
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

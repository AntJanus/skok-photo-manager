import React from 'react';
import ReactDOM from 'react-dom';

const JSX = (
  <div>
    <header>
      <h1 className="title">
        <span className="text-primary">Skok</span> Photo Manager
      </h1>
    </header>
    <main>
      <div>
        <input type="text" placeholder="Directory path"/>
      </div>
      <br />
      <a href="#" className="button-primary">Scan photo directory</a>
    </main>
  </div>
);

ReactDOM.render(JSX, document.getElementById('root'));

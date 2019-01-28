import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router } from 'react-router-dom';

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/navigation";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="grid-container">
          <Header />
          <Navigation />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

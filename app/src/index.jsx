import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./components/header";
import { Main } from './components/main';
import { Footer } from './components/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div className="grid-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));

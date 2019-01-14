import React from "react";
import ReactDOM from "react-dom";

import styles from "../styles/styles.scss";

import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { Navigation } from "./components/navigation";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid-container">
        <Header />
        <Navigation />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

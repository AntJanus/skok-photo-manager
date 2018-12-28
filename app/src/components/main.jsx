import React from "react";

export class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <div>
          <input type="text" placeholder="Enter path" />
        </div>
        <br />
        <a href="#" className="button-primary">
          Scan photo directory
        </a>
      </main>
    );
  }
}

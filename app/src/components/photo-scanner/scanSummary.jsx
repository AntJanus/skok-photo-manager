import React from 'react';

export class ScanSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.indexed &&
          <p>Your photos have been indexed witha  total of {this.props.totalPhotos} photos.</p>
        }
      </div>
    );
  }
}

import React from 'react';
import { transponder } from '../../services/transponder';
import { GalleryImage } from './GalleryImage';

export class GalleryRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    transponder.send('GET', 'photos', {
      limit: 30,
    })
      .then(data => {
        this.setState({
          photos: data,
        });
      })
  }

  render() {
    let photos = this.state.photos.map(photo => {
      return (
        <GalleryImage photo={photo} key={photo.id} />
      )
    })
    return (
      <div className="gallery-container">
        {photos}
      </div>
    )
  }
}

import React, { Component } from 'react';
import './DevWorkGallery.css';

class DevWorkGallery extends Component {

  setImages(images) {
    return images.map((image, i) => {
      return (
        <div key={i} className="dev-work-gallery-image-frame">
          <img className="dev-work-gallery-image" height="600" src={require(`../../../../assets/img/dev/work/${image.src}`)} alt={image.alt} />
        </div>
      )
    })
  }

  render() {

    const IMAGES = this.props.images;

    return (
      <div className="dev-work-gallery-wrapper">
        <div className="dev-work-gallery-roll">
          {this.setImages(IMAGES)}
          {/*<div className="dev-work-gallery-image-frame">
            <img className="dev-work-gallery-image" height="600" src={require(`../../../../assets/img/dev/work/${IMAGES[0].src}`)} alt={IMAGES[0].alt} />
          </div>
          <div className="dev-work-gallery-image-frame">
            <img className="dev-work-gallery-image" height="600" src={require(`../../../../assets/img/dev/work/${IMAGES[1].src}`)} alt={IMAGES[1].alt} />
          </div>
          <div className="dev-work-gallery-image-frame">
            <img className="dev-work-gallery-image" height="600" src={require(`../../../../assets/img/dev/work/${IMAGES[2].src}`)} alt={IMAGES[2].alt} />
          </div>*/}
        </div>
      </div>
    );
  }
}

export default DevWorkGallery;
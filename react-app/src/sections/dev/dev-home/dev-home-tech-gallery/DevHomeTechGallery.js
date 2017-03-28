import React, { Component } from 'react';
import './DevHomeTechGallery.css';

import DevHomeTechCard from '../dev-home-tech-card/DevHomeTechCard';

class DevHomeTechGallery extends Component {

  setTechCards(techs) {
    return techs.map((tech, i) => <DevHomeTechCard key={i} lang={tech} />)
  }

  render() {

    return (
      <div className="dev-home-tech-gallery">
        {this.setTechCards(this.props.techs)}
      </div>
    );

  }
}

export default DevHomeTechGallery;
import React, { Component } from 'react';
import './DevWorkWrapper.css';

import DevWorkGallery from '../dev-work-gallery/DevWorkGallery';

class DevWorkWrapper extends Component {

  render() {

    const LANG = this.props.lang;

    return (
      <div>
        <h2 className="dev-work-title">{LANG.title}</h2>
        <DevWorkGallery images={LANG.images}/>
      </div>
    );
  }

}

export default DevWorkWrapper;
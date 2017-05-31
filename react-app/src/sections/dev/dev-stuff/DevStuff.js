import React, { Component } from 'react';
import './DevStuff.css';

import DsGallery from 'ds-gallery';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';

class DevStuff extends Component {
  render() {

    const LANG = this.props.lang.stuff;

    return (
      <div>
        <DevContentTitle title={LANG.title} />

        {LANG.stuff.map((stuff, i) => {
          return (
            <div key={i}>
              <DevContentHeader title={`${stuff.title} v${stuff.current_version}`} subtitle={stuff.subtitle} avatar={stuff.logo} />
              <div className="dev-work-gallery-wrapper">
                <DsGallery images={stuff.gallery} />
              </div>
              <label className="dev-stuff-label">{LANG.label.description}</label>
              {stuff.description}
              
              <label className="dev-stuff-label">{LANG.label.license}</label>
              {stuff.license}
            </div>
          )
        })}

      </div>
    );
  }
}

export default DevStuff;
import React, { Component } from 'react';
import './DevWorkWrapper.css';

import DevWorkGallery from '../dev-work-gallery/DevWorkGallery';
import DevWorkTechBadge from '../dev-work-tech-badge/DevWorkTechBadge';

class DevWorkWrapper extends Component {

  setBadges(techs) {
    return techs.map((tech, i) => <DevWorkTechBadge key={i} lang={tech} />)
  }

  render() {

    const LANG = this.props.lang;

    return (
      <div>
        
        <h2>{LANG.title}</h2>

        <DevWorkGallery images={LANG.images} />

        <div className="dev-work-tech-badges">
          {this.setBadges(LANG.techs)}
        </div>

        <div className="dev-work-info">
          <h3>{LANG.description}</h3>

          <label className="dev-work-label">{this.props.labels.client_name}</label>
          <div className="dev-work-client-wrapper">
            <p className="dev-work-client-name">{LANG.client_name}</p>
            <a className="dev-work-client-link" href={LANG.client_href} target="_blank">
              <svg height="24" fill={this.props.theme_color} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
              </svg>
            </a>
          </div>

          <label className="dev-work-label">{this.props.labels.status}</label>
          <p className="dev-work-status">{LANG.status}</p>
        </div>

      </div>
    );
  }

}

export default DevWorkWrapper;
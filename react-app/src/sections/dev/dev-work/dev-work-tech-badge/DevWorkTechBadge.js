import React, { Component } from 'react';
import './DevWorkTechBadge.css';

class DevWorkTechBadge extends Component {

  render() {

    const LANG = this.props.lang;

    return (
      <a href={LANG.title.href} target="_blank">
        <div className="dev-work-tech-badge">
          <img
            className="dev-work-tech-badge-img"
            src={require(`../../../../assets/img/dev/techs/${LANG.icon.src}`)}
            alt={LANG.icon.alt}
            title={LANG.title.text}
          />
        </div>
      </a>
    );

  }
}

export default DevWorkTechBadge;
import React, { Component } from 'react';
import './DevHomeTechCard.css';

class DevHomeTechCard extends Component {
  render() {

    const LANG = this.props.lang;

    return (
      <div className="dev-tech-item">
        <div className="dev-tech-header">
          <img src={require(`../../../../assets/img/dev/techs/${LANG.icon.src}`)} alt={LANG.icon.src} />
        </div>
        <div className="dev-tech-body">
          <a href={LANG.title.href} target="_blank">{LANG.title.text}</a>
          <p>{LANG.p}</p>
        </div>
      </div>
    );
  }
}

export default DevHomeTechCard;
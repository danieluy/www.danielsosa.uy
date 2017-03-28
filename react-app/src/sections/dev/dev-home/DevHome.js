import React, { Component } from 'react';
import './DevHome.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';
import DevHomeTechCard from './dev-home-tech-card/DevHomeTechCard';

class DevHome extends Component {

  setTechCards(techs) {
    return techs.map((tech, i) => <DevHomeTechCard key={i} lang={tech} />)
  }

  render() {

    const LANG = this.props.lang.home;

    return (
      <div>
        <DevContentTitle title={LANG.title} />
        <DevContentHeader title={LANG.header_1.title} subtitle={LANG.header_1.subtitle} avatar={LANG.header_1.avatar} />
        <h2 className="dev-content-subtitle">{LANG.h2titles[0]}</h2>
        <p className="dev-content-paragraph" dangerouslySetInnerHTML={{ __html: LANG.paragraph_1 }}></p>
        <h2 className="dev-content-subtitle">{LANG.h2titles[1]}</h2>
        <div className="dev-home-tech-gallery">{this.setTechCards(LANG.techs)}</div>
      </div>
    );

  }
}

export default DevHome;
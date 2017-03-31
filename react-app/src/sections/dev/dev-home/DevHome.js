import React, { Component } from 'react';
import './DevHome.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';
import DevHomeTechGallery from './dev-home-tech-gallery/DevHomeTechGallery';

class DevHome extends Component {

  render() {

    const LANG = this.props.lang.home;
    
    return (
      <div>
        <DevContentTitle title={LANG.title} />
        <DevContentHeader title={LANG.header_1.title} subtitle={LANG.header_1.subtitle} avatar={LANG.header_1.avatar} />
        {/*<DevContentHeader title={LANG.header_2.title} subtitle={LANG.header_2.subtitle} avatar={LANG.header_2.avatar} />*/}
        <h2 className="dev-content-subtitle">{LANG.h2titles[0]}</h2>
        <p className="dev-content-paragraph" dangerouslySetInnerHTML={{ __html: LANG.paragraph_1 }}></p>
        <h2 className="dev-content-subtitle">{LANG.h2titles[1]}</h2>
        <DevHomeTechGallery techs={LANG.techs} />
      </div>
    );

  }
}

export default DevHome;
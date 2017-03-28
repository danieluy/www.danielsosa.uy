import React, { Component } from 'react';
import './DevHome.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';

class DevHome extends Component {
  render() {

    const LANG = this.props.lang.home;

    return (
      <div>
        <DevContentTitle title={LANG.title}/>
        <DevContentHeader title={LANG.header_1.title} subtitle={LANG.header_1.subtitle} avatar={LANG.header_1.avatar}/>
      </div>
    );
    
  }
}

export default DevHome;
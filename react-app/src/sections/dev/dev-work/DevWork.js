import React, { Component } from 'react';
import './DevWork.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';
import DevWorkWrapper from './dev-work-wrapper/DevWorkWrapper';

class DevWork extends Component {
  render() {

    const LANG = this.props.lang.work;

    return (
      <div>
        <DevContentTitle title={LANG.title} />
        
        <DevContentHeader title={LANG.employed.header_title} subtitle={LANG.employed.header_subtitle} avatar={LANG.employed.logo_src} />

        <DevContentHeader title={LANG.freelance.header_title} subtitle={LANG.freelance.header_subtitle} avatar={LANG.freelance.logo_src} />
        <DevWorkWrapper
          lang={LANG.freelance.works.prizes_management}
          theme_color={LANG.freelance.theme_color}
          labels={LANG.freelance.works.labels}
        />
        <DevWorkWrapper
          lang={LANG.freelance.works.mtec}
          theme_color={LANG.freelance.theme_color}
          labels={LANG.freelance.works.labels}
        />

      </div>
    );
  }
}

export default DevWork;
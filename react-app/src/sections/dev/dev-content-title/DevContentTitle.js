import React, { PureComponent } from 'react';
import './DevContentTitle.css';

import { HomeIcon } from '../../../assets/icons';

class DevContentTitle extends PureComponent {

  render() {

    return (
      <div className="dev-content-title">
        {/* <HomeIcon className="dev-content-icon" /> */}
        <h1 className="dev-content-title-text">{this.props.title}</h1>
      </div>
    );

  }
}

export default DevContentTitle;
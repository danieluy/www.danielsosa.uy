import React, { Component } from 'react';
import './DevWork.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';

class DevWork extends Component {
  render() {

    const LANG = this.props.lang.work;

    return (
      <div>
        <DevContentTitle title={LANG.title}/>
      </div>
    );
  }
}

export default DevWork;
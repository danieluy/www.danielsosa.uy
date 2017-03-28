import React, { Component } from 'react';
import './DevAcademic.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';

class DevAcademic extends Component {
  render() {

    const LANG = this.props.lang.academic;

    return (
      <div>
        <DevContentTitle title={LANG.title}/>
      </div>
    );
  }
}

export default DevAcademic;
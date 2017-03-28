import React, { Component } from 'react';
import './DevContact.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';

class DevContact extends Component {
  render() {

    const LANG = this.props.lang.contact;

    return (
      <div>
        <DevContentTitle title={LANG.title}/>
      </div>
    );
  }
}

export default DevContact;
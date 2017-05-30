import React, { Component } from 'react';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';

class DevStuff extends Component {
  render() {

    const LANG = this.props.lang.stuff;

    return (
      <div>
        <DevContentTitle title={LANG.title} />

        <DevContentHeader title={LANG.stuff[0].title} subtitle={LANG.stuff[0].subtitle} avatar={LANG.stuff[0].logo} />
      </div>
    );
  }
}

export default DevStuff;
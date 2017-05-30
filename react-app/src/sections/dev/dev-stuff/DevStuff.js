import React, { Component } from 'react';

class DevStuff extends Component {
  render() {

    const LANG = this.props.lang.stuff;

    return (
      <div>
        {LANG.title}
     </div>
    );
  }
}

export default DevStuff;
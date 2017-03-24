import React, { Component } from 'react';
import './DevHome.css';

class DevHome extends Component {
  render() {
    return (
      <pre>{JSON.stringify(this.props.lang, null, 2)}</pre>
    );
  }
}

export default DevHome;
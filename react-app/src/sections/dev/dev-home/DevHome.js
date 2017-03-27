import React, { Component } from 'react';
import './DevHome.css';

class DevHome extends Component {
  render() {
    const LANG = this.props.lang.home;
    return (
      <pre>{JSON.stringify(LANG, null, 2)}</pre>
    );
  }
}

export default DevHome;
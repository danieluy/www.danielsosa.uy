import React, { Component } from 'react';
import './DevHome.css';

class DevHome extends Component {
  render() {

    const LANG = this.props.lang.home;

    console.log(LANG);

    return (
      <div>Home Component</div>
    );
  }
}

export default DevHome;
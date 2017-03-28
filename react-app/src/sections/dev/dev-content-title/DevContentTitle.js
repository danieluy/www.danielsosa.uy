import React, { Component } from 'react';
import './DevContentTitle.css';

class DevContentTitle extends Component {

  render() {
    
    return (
      <h1 className="dev-content-title-text">{this.props.title}</h1>
    );
  }
}

export default DevContentTitle;
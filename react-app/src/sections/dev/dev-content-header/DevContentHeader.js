import React, { Component } from 'react';
import './DevContentHeader.css';

class DevContentHeader extends Component {
  render() {

    return (
      <div className="list-header">
        <span className="logo-header"><img src={require(`../../../assets/img/dev/home/${this.props.avatar}`)} alt="Avatar" /></span>
        <span className="header-title">{this.props.title}</span>
        <span className="header-subtitle">{this.props.subtitle}</span>
      </div>
    );

  }
}

export default DevContentHeader;
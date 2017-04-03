import React, { Component } from 'react';
import './DevContentHeader.css';

class DevContentHeader extends Component {

  render() {

    return (
      <div className="dev-content-header">
        <img className="dev-content-header-logo" src={require(`../../../assets/img/dev/${this.props.avatar}`)} alt="Avatar" />
        <div className="dev-content-header-info">
          <div className="dev-content-header-info-title">
            {this.props.title}
            {this.props.title_append ? <span className="dev-content-header-info-title-appendix">{this.props.title_append}</span> : ""}
          </div>
          <div className="dev-content-header-info-subtitle">{this.props.subtitle}</div>
        </div>

        <div className="dev-content-favicon">
          {this.props.action ? this.props.action : null}
        </div>

      </div>
    );

  }
}

export default DevContentHeader;
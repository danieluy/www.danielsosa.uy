import React, { Component } from 'react';
import './DevContentHeader.css';

class DevContentHeader extends Component {

  setLink(link) {
    if (link)
      return (
        <div className="dev-content-favicon" style={{ backgroundColor: this.props.color_theme }}>
          <a href={link.url} target="_blank" dangerouslySetInnerHTML={link.icon} />
        </div>
      )
    return null;
  }

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

        {this.setLink.call(this, this.props.link)}

      </div>
    );

  }
}

export default DevContentHeader;
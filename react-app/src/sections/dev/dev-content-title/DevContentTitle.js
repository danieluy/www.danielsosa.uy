import React, { PureComponent } from 'react';
import './DevContentTitle.css';

class DevContentTitle extends PureComponent {

  render() {

    return (
      <div className="dev-content-title">
        <h1 className="dev-content-title-text">{this.props.title}</h1>
      </div>
    );

  }
}

export default DevContentTitle;
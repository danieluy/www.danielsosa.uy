import React, { PureComponent } from 'react';
import './DevContentTitle.css';

class DevContentTitle extends PureComponent {

  render() {
    
    return (
      <h1 className="dev-content-title-text">{this.props.title}</h1>
    );
    
  }
}

export default DevContentTitle;
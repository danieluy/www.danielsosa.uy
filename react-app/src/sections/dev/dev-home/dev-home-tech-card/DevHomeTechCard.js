import React, { Component } from 'react';
import './DevHomeTechCard.css';

class DevHomeTechCard extends Component {
  render() {

    return (
      <div>
        <pre>
          {JSON.stringify(this.props.lang, null, 2)}
        </pre>
      </div>
    );

  }
}

export default DevHomeTechCard;
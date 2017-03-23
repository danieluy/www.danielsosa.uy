import React, { Component } from 'react';
import './Dev.css';

class Dev extends Component {
  render() {
    return (
      <div>
        <h1>Dev component</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Dev;
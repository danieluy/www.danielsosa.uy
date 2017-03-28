import React, { Component } from 'react';
import './DevContentWrapper.css';

class DevContentWrapper extends Component {

  constructor() {
    super();
    this.state = {
      height: { height: window.innerHeight }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => { this.setState({ height: { height: window.innerHeight } }) })
  }

  render() {
    return (
      <div className="dev-content-wrapper" style={this.state.height}>
        <div className="dev-content-center">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DevContentWrapper;
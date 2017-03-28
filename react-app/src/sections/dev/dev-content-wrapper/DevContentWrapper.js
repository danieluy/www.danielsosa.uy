import React, { Component } from 'react';
import './DevContentWrapper.css';

class DevContentWrapper extends Component {

  constructor() {
    super();
    this.state = {
      height: { height: `${window.innerHeight - 60}px` }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => { this.setState({ height: { height: `${window.innerHeight - 60}px` } }) })
  }

  render() {
    return (
      <div className="dev-content-wrapper" style={this.state.height} onScroll={this.props.parentMethods.hoverNavbar}>
        <div className="dev-content-center">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DevContentWrapper;
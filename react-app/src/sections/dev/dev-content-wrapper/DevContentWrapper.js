import React, { PureComponent } from 'react';
import './DevContentWrapper.css';

class DevContentWrapper extends PureComponent {

  render() {
    return (
      <div
        className="dev-content-wrapper"
        style={{ height: `${this.props.window_height - 60}px` }}
        onScroll={this.props.parentMethods.hoverNavbar}
      >
        <div className="dev-content-center">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DevContentWrapper;
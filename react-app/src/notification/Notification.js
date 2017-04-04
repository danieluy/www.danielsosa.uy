import React, { Component } from 'react';
import './Notification.css';

class Notification extends Component {

  getIcon(type) {
    switch (type) {
      case 'Error':
        return (
          <svg className="notification-header-icon" fill="#c94242" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
        );

      case 'Alert':
        return (
          <svg className="notification-header-icon" fill="#c9c242" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        );
      default:
        return (
          <svg className="notification-header-icon" fill="#42c966" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        );
    }
  }


  render() {

    const options = this.props.options;

    return (
      <div className="notification-wrapper">
        <div className="notification">
          <div className="notification-header">
            {this.getIcon(options.type)}
            <div>{options.title}</div>
          </div>
          <div>{options.subtitle}</div>
          <div>{options.body}</div>
        </div>
      </div>
    );
  }
}

export default Notification;
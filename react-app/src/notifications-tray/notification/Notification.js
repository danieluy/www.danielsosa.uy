import React, { PureComponent } from 'react';
import './Notification.css';

class Notification extends PureComponent {

  getIcon(type) {
    switch (type) {
      case 'error':
        return (
          <svg className="notification-header-icon" fill="#c94242" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
        );
      case 'alert':
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
    const id = this.props.id;

    return (
      <div className="notification-wrapper">
        <div className="notification-header">
          {this.getIcon(options.type)}
        </div>
        <div className="notification-body">
          <div className="notification-title">{options.title}</div>
          <div className="notification-subtitle">{options.subtitle}</div>
          <div className="notification-body-content">
            {options.body.map((txt, i) => <p key={i}>{txt}</p>)}
          </div>
        </div>
        <button onClick={this.props.close.bind(null, id)} className="notification-button-close">
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </div>
    );
  }
}

export default Notification;
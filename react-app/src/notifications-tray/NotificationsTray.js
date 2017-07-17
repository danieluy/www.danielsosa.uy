import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NotificationsTray.css';

import Notification from './notification/Notification';


class NotificationsTray extends Component {

  constructor() {
    super();
    this.state = {
      notifications: []
    }
  }

  renderNotifications() {
    return this.state.notifications.map((notif, i) => (
      <Notification
        key={i}
        id={i}
        options={notif}
        close={this.closeNotification.bind(this)}
      />
    ));
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.notification) {
      const aux = this.state.notifications
      aux.push(nextProps.notification)
      this.setState({
        notifications: aux
      })
    }
  }

  closeNotification(id) {
    this.setState({
      notifications: this.state.notifications.filter((notif, i) => i !== id)
    })
  }

  render() {
    return (
      <div className="notifications-tray-wrapper">
        {this.renderNotifications()}
      </div>
    );
  }
}

NotificationsTray.propTypes = {
  notification: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    body: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string
  } )
};

export default NotificationsTray;
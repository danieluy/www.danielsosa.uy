import React, { Component } from 'react';
import './NotificationsTray.css';

import Notification from './notification/Notification';


class NotificationsTray extends Component {

  constructor() {
    super();
    this.state = {
      notifications: []
    }
  }

  getNotifications(notifications) {
    return this.state.notifications.map((notif, i) => <Notification key={i} options={notif} />);
  }

  // nextProps.notification: {
  //   title: String,
  //   subtitle: String,
  //   body: String,
  //   type: String <''><'alert'><'error'>
  // }
  componentWillReceiveProps(nextProps) {
    if (!this.props.notification)
      this.setState({ notifications: [nextProps.notification] });
    else if (nextProps.notification && nextProps.notification !== this.props.notification) {
      let aux = this.state.notifications.slice();
      aux.push(nextProps.notification);
      this.setState({ notifications: aux });
    }
  }

  render() {
    return (
      <div className="notifications-tray-wrapper">
        {this.getNotifications()}
      </div>
    );
  }
}

export default NotificationsTray;
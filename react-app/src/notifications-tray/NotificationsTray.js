import React, { PureComponent } from 'react';
import './NotificationsTray.css';

import Notification from './notification/Notification';


class NotificationsTray extends PureComponent {

  constructor() {
    super();
    this.state = {
      notifications: []
    }
  }

  getNotifications() {
    return this.state.notifications.map((notif, i) => <Notification
      key={i}
      id={i}
      options={notif}
      close={this.closeNotification.bind(this)}
    />);
  }

  // nextProps.notification: {
  //   title: String,
  //   subtitle: String,
  //   body: String,
  //   type: String <''><'alert'><'error'>
  // }
  componentWillReceiveProps(nextProps) {
    if (nextProps.notification && !this.props.notification)
      this.setState({ notifications: [nextProps.notification] });
    else if (nextProps.notification && nextProps.notification !== this.props.notification) {
      let aux = this.state.notifications.slice();
      aux.push(nextProps.notification);
      this.setState({ notifications: aux });
    }
  }

  closeNotification(id) {
    let aux = this.state.notifications.filter((notif, i) => i !== id);
    this.setState({
      notifications: aux
    })
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
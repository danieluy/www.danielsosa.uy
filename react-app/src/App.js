import React, { Component } from 'react';
import './App.css';

import NotificationsTray from './notifications-tray/NotificationsTray';

class App extends Component {

  constructor() {
    super();
    this.state = {
      window_height: window.innerHeight,
      notification: null
    }
  }

  setStatusBarThemeColor(color_hex) {
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].name === 'theme-color' || metas[i].name === 'msapplication-navbutton-color' || metas[i].name === 'apple-mobile-web-app-status-bar-style')
        metas[i].content = color_hex || '#000000';
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        window_height: window.innerHeight
      })
    });
    this.createNotifitacion({
      title: 'Notification',
      subtitle: 'Just an example',
      body: 'You are seeing this notification just so that you know that this page can show you notifications.',
      type: ''
    })
    setTimeout(() => {
      this.createNotifitacion({
        title: 'Notification',
        subtitle: 'Just another example',
        body: 'You are seeing this second notification to let you know that there are more than one type of notifications, in this case you are seeing an Alert. Could there be more types...?',
        type: 'alert'
      })
    }, 3000);
    setTimeout(() => {
      this.createNotifitacion({
        title: 'Notification',
        subtitle: 'Yet another example',
        body: 'There you go, another type of notification, this time you are seeing an error, well, not really an error just a simulation ;)',
        type: 'error'
      })
    }, 10000);
  }

  createNotifitacion(notif) {
    this.setState({
      notification: notif
    })
  }

  render() {

    const children_with_props = React.cloneElement(this.props.children, {
      setStatusBarThemeColor: this.setStatusBarThemeColor,
      window_height: this.state.window_height,
      notify: this.createNotifitacion.bind(this)
    })

    return (
      <div>
        {children_with_props}
        <NotificationsTray notification={this.state.notification} />
      </div>
    );
  }
}

export default App;

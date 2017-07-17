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
      if (metas[i].name === 'theme-color'
        || metas[i].name === 'msapplication-navbutton-color'
        || metas[i].name === 'apple-mobile-web-app-status-bar-style')
        metas[i].content = color_hex || '#000000';
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        window_height: window.innerHeight
      })
    });
  }

  createNotifitacion(notif) {
    this.setState({
      notification: notif
    }, () => {
      this.setState({
        notification: null
      })
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

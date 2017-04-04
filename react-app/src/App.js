import React, { Component } from 'react';
import './App.css';

import Notification from './notification/Notification';

class App extends Component {

  constructor() {
    super();
    this.state = {
      window_height: window.innerHeight
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
    })
  }


  render() {

    const children_with_props = React.cloneElement(this.props.children, {
      setStatusBarThemeColor: this.setStatusBarThemeColor,
      window_height: this.state.window_height
    })

    return (
      <div>
        {children_with_props}
        {/*<Notifications />*/}
        <Notification options={{
          title: 'Notification Title',
          subtitle: 'Subtitle for the notification',
          body: 'Some text to display on the notification',
          type: ''
        }} />
        <Notification options={{
          title: 'Notification Title',
          subtitle: 'Subtitle for the notification',
          body: 'Some text to display on the notification',
          type: 'Alert'
        }} />
        <Notification options={{
          title: 'Notification Title',
          subtitle: 'Subtitle for the notification',
          body: 'Some text to display on the notification',
          type: 'Error'
        }} />
      </div>
    );
  }
}

export default App;

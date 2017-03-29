import React, { Component } from 'react';
import './App.css';

class App extends Component {

  setStatusBarThemeColor(color_hex) {
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].name === 'theme-color' || metas[i].name === 'msapplication-navbutton-color' || metas[i].name === 'apple-mobile-web-app-status-bar-style')
        metas[i].content = color_hex || '#000000';
    }
    console.log('setStatusBarThemeColor called at App Component with hex value:', color_hex);
  }


  render() {

    const children_with_props = React.cloneElement(this.props.children, {
      setStatusBarThemeColor: this.setStatusBarThemeColor
    })

    return (
      <div>
        {children_with_props}
      </div>
    );
  }
}

export default App;

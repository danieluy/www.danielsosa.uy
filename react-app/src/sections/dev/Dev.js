import React, { Component } from 'react';
import './Dev.css';

import DevNavbar from './dev-navbar/DevNavbar';
import DevContentWrapper from './dev-content-wrapper/DevContentWrapper';

import { es as ES } from '../../assets/lang/lang-dev';
import { en as EN } from '../../assets/lang/lang-dev';

class Dev extends Component {

  constructor() {
    super();
    this.state = {
      lang: this.getSystemLanguage(),
      hoverNavbar: false
    }
  }

  getSystemLanguage() {
    if (navigator)
      return ((navigator.language || navigator.userLanguage) || 'es').slice(0, 2);
    return 'es';
  }

  componentDidMount() {
    this.props.setStatusBarThemeColor('#0088cc');
  }

  toggleLang() {
    const aux = this.state.lang === 'es' ? 'en' : 'es';
    this.setState({ lang: aux })
  }

  hoverNavbar(evt) {
    const posY = evt.target.scrollTop;
    if (posY === 0)
      this.setState({ hoverNavbar: false })
    else if (!this.state.hoverNavbar)
      this.setState({ hoverNavbar: true })
  }

  render() {

    const LANG = this.state.lang === 'es' ? ES : EN;

    const children_with_props = React.cloneElement(this.props.children, {
      lang: LANG,
      notify: this.props.notify
    })

    return (
      <div>

        <DevNavbar lang={LANG} hover={this.state.hoverNavbar} parentMethods={{
          toggleLang: this.toggleLang.bind(this)
        }} />

        <DevContentWrapper
          children={children_with_props}
          parentMethods={{
            hoverNavbar: this.hoverNavbar.bind(this)
          }}
          window_height={this.props.window_height}
        />

      </div>
    );
  }
}

export default Dev;
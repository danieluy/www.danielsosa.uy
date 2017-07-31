import React, { PureComponent } from 'react';
import './Dev.css';

import { getSystemLanguage } from '../../utils'

import { es as ES } from '../../assets/lang/lang-dev';
import { en as EN } from '../../assets/lang/lang-dev';

import DevNavbar from './dev-navbar/DevNavbar';
import DevContentWrapper from './dev-content-wrapper/DevContentWrapper';

class Dev extends PureComponent {

  constructor() {
    super();
    this.state = {
      lang: getSystemLanguage(),
      navbar_shadow: false
    }
  }

  componentDidMount() {
    this.props.setStatusBarThemeColor('#0088cc');
  }

  toggleLang() {
    const aux = this.state.lang === 'es' ? 'en' : 'es';
    this.setState({ lang: aux })
  }

  toggleNavbarShadow(evt) {
    const posY = evt.target.scrollTop;
    if (posY === 0)
      this.setState({ navbar_shadow: false })
    else if (!this.state.navbar_shadow)
      this.setState({ navbar_shadow: true })
  }

  render() {

    const LANG = this.state.lang === 'es' ? ES : EN;

    const children_with_props = React.cloneElement(this.props.children, {
      lang: LANG,
      notify: this.props.notify
    })

    return (
      <div>

        <DevNavbar lang={LANG} hover={this.state.navbar_shadow} parentMethods={{
          toggleLang: this.toggleLang.bind(this)
        }} />

        <DevContentWrapper
          children={children_with_props}
          parentMethods={{
            toggleNavbarShadow: this.toggleNavbarShadow.bind(this)
          }}
          window_height={this.props.window_height}
        />

      </div>
    );
  }
}

export default Dev;
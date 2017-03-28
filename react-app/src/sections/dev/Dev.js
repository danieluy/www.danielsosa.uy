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
      lang: 'es'
    }
  }

  toggleLang() {
    const aux = this.state.lang === 'es' ? 'en' : 'es';
    this.setState({ lang: aux })
  }

  render() {

    const LANG = this.state.lang === 'es' ? ES : EN;

    const children_with_props = React.cloneElement(this.props.children, {
      lang: LANG
    })

    return (
      <div>

        <DevNavbar lang={LANG} parentMethods={{
          toggleLang: this.toggleLang.bind(this)
        }} />

        <DevContentWrapper children={children_with_props} />

      </div>
    );
  }
}

export default Dev;
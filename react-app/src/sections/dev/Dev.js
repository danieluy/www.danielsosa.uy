import React, { Component } from 'react';
import './Dev.css';

import DevNavbar from './dev-navbar/DevNavbar';

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

    const lang = this.state.lang === 'es' ? ES : EN;

    const children_with_props = React.cloneElement(this.props.children, {
      lang: lang
    })
    
    return (
      <div>
        <DevNavbar parentMethods={{
          toggleLang: this.toggleLang.bind(this)
        }} />
        {children_with_props}
      </div>
    );
  }
}

export default Dev;
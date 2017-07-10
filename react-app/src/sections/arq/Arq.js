import React, { Component } from 'react';

import { es as ES } from '../../assets/lang/lang-arq';
import { en as EN } from '../../assets/lang/lang-arq';

import Placeholder from '../placeholder/Placeholder';

class Arq extends Component {
  constructor() {
    super();
    this.state = {
      lang: this.getSystemLanguage()
    }
  }

  getSystemLanguage() {
    if (navigator)
      return ((navigator.language || navigator.userLanguage) || 'es').slice(0, 2);
    return 'es';
  }

  componentDidMount() {
    this.props.setStatusBarThemeColor('#ff3333');
  }

  render() {

    const lang = this.state.lang === 'es' ? ES : EN;

    return (
      <div>

        <Placeholder lang={lang}/>

      </div>
    );
  }
}

export default Arq;
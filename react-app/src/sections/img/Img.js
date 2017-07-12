import React, { PureComponent } from 'react';

import { es as ES } from '../../assets/lang/lang-img';
import { en as EN } from '../../assets/lang/lang-img';

import Placeholder from '../placeholder/Placeholder';

class Img extends PureComponent {
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
    this.props.setStatusBarThemeColor('#ffbb00');
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

export default Img;
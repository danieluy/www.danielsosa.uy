import React, { PureComponent } from 'react';
import './Arq.css';

import { es as ES } from '../../assets/lang/lang-arq';
import { en as EN } from '../../assets/lang/lang-arq';

import ArqNavbar from './arq-navbar/ArqNavbar';
import ArqContent from './arq-content/ArqContent';

class Arq extends PureComponent {
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
      <div className="arq-root" style={{ width: '100%', height: `${this.props.window_height}px` }}>
        <ArqNavbar lang={lang} />
        <ArqContent lang={lang} />
      </div>
    );
  }
}

export default Arq;
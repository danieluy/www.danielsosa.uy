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
      lang: this.getSystemLanguage(),
      anchors: []
    }
  }
  getSystemLanguage() {
    if (navigator)
      return ((navigator.language || navigator.userLanguage) || 'es').slice(0, 2);
    return 'es';
  }
  toggleLang() {
    const aux = this.state.lang === 'es' ? 'en' : 'es';
    this.setState({ lang: aux })
  }
  componentDidMount() {
    this.props.setStatusBarThemeColor('#FF3300');
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  handleScroll(evt) {
    for (let i = 0; i < this.state.anchors.length; i++)
      if (evt.srcElement.activeElement.scrollTop >= this.state.anchors[i].offsetTop) {
        this.setHash(this.state.anchors[i])
        break
      }
  }
  setAchors(anchors) {
    this.setState({
      anchors: anchors.sort((nodeA, nodeB) => nodeB.offsetTop - nodeA.offsetTop)
    })
  }
  setHash(anchor) {
    history.pushState(null, null, `#${anchor.id}`);
  }
  render() {

    const lang = this.state.lang === 'es' ? ES : EN;
    
    return (
      <div className="arq-root" style={{ width: '100%', height: `${this.props.window_height}px` }}>
        <ArqNavbar
          lang={lang}
          anchors={this.state.anchors}
          toggleLang={this.toggleLang.bind(this)}
        />
        <ArqContent
          lang={lang}
          setAchors={this.setAchors.bind(this)}
          windowWidth={this.props.window_width}
        />
      </div>
    );
  }
}

export default Arq;
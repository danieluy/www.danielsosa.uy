import React, { PureComponent } from 'react';
import './Arq.css';

import { getSystemLanguage } from '../../utils'

import _ from 'lodash'

import { es as ES } from '../../assets/lang/lang-arq';
import { en as EN } from '../../assets/lang/lang-arq';

import ArqNavbar from './arq-navbar/ArqNavbar';
import ArqContent from './arq-content/ArqContent';

class Arq extends PureComponent {
  constructor() {
    super();
    this.state = {
      lang: getSystemLanguage(),
      anchors: []
    }
  }
  toggleLang() {
    const aux = this.state.lang === 'es' ? 'en' : 'es';
    this.setState({ lang: aux })
  }
  componentDidMount() {
    this.props.setStatusBarThemeColor('#FF3300');
    window.addEventListener('scroll', _.debounce(this.handleScroll.bind(this), 100))
  }
  handleScroll(evt) {
    console.log(this.state.anchors)
    for (let i = 0; i < this.state.anchors.length; i++)
      if (evt.srcElement.activeElement.scrollTop >= this.state.anchors[i].offsetTop) {
        console.log(evt.srcElement.activeElement.scrollTop, '>=', this.state.anchors[i].offsetTop)
        this.setHash(this.state.anchors[i])
        console.log('hash setted to', `#${this.state.anchors[i].id}`)
        break
      }
  }
  setHash(anchor) {
    history.pushState(null, null, `#${anchor.id}`);
  }
  setAchorsFromChild(anchors) {
    this.setState({
      anchors: anchors.sort((nodeA, nodeB) => nodeB.offsetTop - nodeA.offsetTop)
    })
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
          setAchors={this.setAchorsFromChild.bind(this)}
          windowWidth={this.props.window_width}
        /> 
      </div>
    );
  }
}

export default Arq;
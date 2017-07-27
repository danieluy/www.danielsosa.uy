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
  componentDidMount() {
    this.props.setStatusBarThemeColor('#FF3300');
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  scrollTop = 0
  handleScroll(evt) {
    const dir = this.scrollTop >= evt.srcElement.activeElement.scrollTop ? 1 : -1
    this.scrollTop = evt.srcElement.activeElement.scrollTop
    console.log(dir > 0 ? 'up' : 'down')
    if (dir < 0) {
      for (let i = 0; i < this.state.anchors.length; i++)
        if (this.scrollTop >= this.state.anchors[i].offsetTop) {
          this.setHash(this.state.anchors[i])
          break
        }
    }
    else {
      for (let i = this.state.anchors.length - 1; i > -1; i--)
        if (this.scrollTop < this.state.anchors[i].offsetTop) {
          this.setHash(this.state.anchors[i])
          break
        }
    }
  }
  setAchors(anchors) {
    this.setState({
      anchors: anchors.sort((nodeA, nodeB) => nodeB.offsetTop - nodeA.offsetTop)
    })
  }
  setHash(anchor) {
    window.location.hash = `#${anchor.id}`
  }
  getSystemLanguage() {
    if (navigator)
      return ((navigator.language || navigator.userLanguage) || 'es').slice(0, 2);
    return 'es';
  }
  render() {

    const lang = this.state.lang === 'es' ? ES : EN;

    return (
      <div className="arq-root" style={{ width: '100%', height: `${this.props.window_height}px` }}>
        <ArqNavbar
          lang={lang}
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
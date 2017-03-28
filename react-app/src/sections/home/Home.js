import React, { Component } from 'react';

import { es as ES } from '../../assets/lang/lang-home';
import { en as EN } from '../../assets/lang/lang-home';

import HomeHeader from './home-header/HomeHeader';
import HomeFooter from './home-footer/HomeFooter';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'es',
      header: { height: window.innerHeight }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => { this.setState({ header: { height: window.innerHeight } }) })
  }

  toggleLang() {
    const aux = this.state.lang === 'es' ? 'en' : 'es';
    this.setState({ lang: aux })
  }

  render() {

    const lang = this.state.lang === 'es' ? ES : EN;

    return (
      <div>

        <HomeHeader />

        <HomeFooter lang={lang} />

        <button style={{position: 'fixed', top: 0, left: 0, zIndex: '10', backgroundColor: 'red'}} onClick={this.toggleLang.bind(this)}>lalala</button>

      </div>
    );
  }
}

export default Home;
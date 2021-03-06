import React, { PureComponent } from 'react';

import { getSystemLanguage } from '../../utils'

import { es as ES } from '../../assets/lang/lang-home';
import { en as EN } from '../../assets/lang/lang-home';

import HomeHeader from './home-header/HomeHeader';
import HomeFooter from './home-footer/HomeFooter';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lang: getSystemLanguage()
    }
  }

  componentDidMount() {
    this.props.setStatusBarThemeColor('#000000');
  }

  toggleLang() {
    this.setState({
      lang: (this.state.lang === 'es' ? 'en' : 'es')
    })
  }

  render() {

    const lang = this.state.lang === 'es' ? ES : EN;

    return (
      <div>

        <HomeHeader window_height={this.props.window_height} />

        <HomeFooter lang={lang} window_height={this.props.window_height} />

        {/*<button onClick={this.toggleLang.bind(this)} style={{ position: 'fixed', top: 0, left: 0, zIndex: '10', backgroundColor: 'red' }}>lalala</button>*/}

      </div>
    );
  }
}

export default Home;
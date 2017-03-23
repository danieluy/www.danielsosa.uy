import React, { Component } from 'react';
import { Link } from 'react-router'
import './Home.css';

import HomeHeader from './home-header/HomeHeader';
import HomeFooter from './home-footer/HomeFooter';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: { height: window.innerHeight }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => { this.setState({ header: { height: window.innerHeight } }) })
  }

  render() {
    return (
      <div>

        <HomeHeader />

        <HomeFooter />

      </div>
    );
  }
}

export default Home;
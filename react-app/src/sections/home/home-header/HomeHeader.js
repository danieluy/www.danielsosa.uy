import React, { Component } from 'react';
import { Link } from 'react-router'
import './HomeHeader.css';

import arrow_down from '../../../assets/img/home/arrow_down.svg';

class HomeHeader extends Component {
  constructor() {
    super();
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

        <header className="full-header" id="full-header" style={this.state.header}>
          <nav className="full-nav">
            <ul className="links-list">

              <li className="arq">
                <Link className="nav-link" to="/arq">
                  <svg className="nav-icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" />
                    <path d="M0 0h24v24H0V0z" fill="none" />
                  </svg>
                  <span>arq</span>
                </Link>

              </li>
              <li className="dev">
                <Link className="nav-link" to="/dev">
                  <svg className="nav-icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                  <span>dev</span>
                </Link>

              </li>
              <li className="img">
                <Link className="nav-link" to="/img">
                  <svg className="nav-icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                  </svg>
                  <span>img</span>
                </Link>
              </li>

            </ul>
          </nav>
        </header>
        
        <div id="footer-pointer">
          <img src={arrow_down} alt="Scroll down pointer" />
        </div>

      </div>
    );
  }
}

export default HomeHeader;
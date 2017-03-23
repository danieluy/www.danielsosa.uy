import React, { Component } from 'react';
import { Link } from 'react-router'
import './HomeFooter.css';

import mail from '../../../assets/img/home/mail.svg';
import phone from '../../../assets/img/home/phone.svg';
import login from '../../../assets/img/home/login.svg';
import copyright from '../../../assets/img/home/copyright.svg';


class HomeFooter extends Component {
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

        <footer className="home-footer">

          <div className="ftr-left-elements">
            <span className="ftr-element ftr-copyright">
              <img className="ftr-icon" src={copyright} alt="Copyraight Icon" />
              Daniel Sosa 2017
            </span>

            <a className="ftr-element ftr-mailto" href="mailto:danielsosa.uy@gmail.com?Subject=Contact%20from%20www.danielsosa.uy" target="blank" title="{{mail_to}}"><img className="ftr-icon" src={mail} alt="Email Icon" /> danielsosa.uy@gmail.com</a>

            <a className="ftr-element ftr-phone-call" href="tel:0059899636065" target="blank" title="{{call}}"><img className="ftr-icon" src={phone} alt="Phone Icon" /> (+598) 99 636 065</a>
          </div>

          <a className="ftr-element ftr-btn-login" href="/login" title="{{login}}"><img className="ftr-icon" src={login} alt="Login Icon" /></a>

        </footer>

      </div>
    );
  }
}

export default HomeFooter;
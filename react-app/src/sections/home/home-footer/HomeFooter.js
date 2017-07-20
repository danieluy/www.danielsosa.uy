import React, { PureComponent } from 'react';
import './HomeFooter.css';

import { PhoneIcon, CopyrightIcon, EmailIcon } from '../../../assets/icons';


class HomeFooter extends PureComponent {

  setHeight(current_height) {
    if (window.innerWidth <= 768)
      return `${current_height}px`;
    else
      return '60px';
  }

  render() {

    const LANG = this.props.lang.footer;

    return (
      <div>

        <footer className="home-footer" style={{ height: this.setHeight(window.innerHeight) }}>

          <div className="ftr-left-elements">
            <span className="ftr-element ftr-copyright">
              <CopyrightIcon className="ftr-icon" height="24" width="24" />
              Daniel Sosa 2016 - {new Date().getFullYear()}
            </span>

            <a className="ftr-element ftr-mailto" href="mailto:danielsosa.uy@gmail.com?Subject=Contact%20from%20www.danielsosa.uy" target="blank" title={LANG.mail_to}>
              <EmailIcon className="ftr-icon" height="24" width="24" />
              danielsosa.uy@gmail.com
            </a>

            <a className="ftr-element ftr-phone-call" href="tel:0059899636065" target="blank" title={LANG.call}>
              <PhoneIcon className="ftr-icon" height="24" width="24" />
              (+598) 99 636 065
            </a>
          </div>

          {/* <a className="ftr-element ftr-btn-login" href="/login" title={LANG.login}>
            <svg className="ftr-icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </a> */}

        </footer>

      </div>
    );
  }
}

export default HomeFooter;
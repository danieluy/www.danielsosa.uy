import React, { Component } from 'react';
import { Link } from 'react-router';
import './DevNavbar.css';

import { CodeIcon, MenuIcon, HomeIcon, WorkIcon, StufIcon } from '../../../assets/icons';

class DevNavbar extends Component {

  constructor() {
    super();
    this.state = {
      display_menu: 'dev-nav-actions',
      display_menu_background: 'dev-nav-links-background',
    }
  }


  hoverNavbar(hover) {
    return hover ? { boxShadow: '0 2px 4px rgba(0, 0, 0, .5)' } : { boxShadow: 'none' }
  }

  openOpenCloseMenu(e) {
    if (window.innerWidth <= 768)
      this.setState({
        display_menu: this.state.display_menu === 'dev-nav-actions visible' ? 'dev-nav-actions' : 'dev-nav-actions visible',
        display_menu_background: this.state.display_menu_background === 'dev-nav-links-background visible' ? 'dev-nav-links-background' : 'dev-nav-links-background visible'
      })
  }

  render() {

    const LANG = this.props.lang.nav;

    return (
      <header className="dev-header" style={this.hoverNavbar(this.props.hover)}>

        <nav className="dev-navbar">

          <div className="dev-nav-title">
            <Link to="/">
              <CodeIcon className="dev-nav-title-icon" />
            </Link>
            <MenuIcon onClick={this.openOpenCloseMenu.bind(this)} className="dev-nav-menu-icon" />
            <span className="dev-nav-title-text"><i>www.danielsosa.uy</i>{window.location.pathname}</span>
          </div>

          {/*dev-nav-actions*/}
          <div className={this.state.display_menu}>

            <div className="dev-nav-links">

              <Link to="/" className="dev-nav-mobile-back-link">
                <CodeIcon className="dev-nav-back-icon" />
                <span className="dev-nav-link-text dev-nav-link-text-white">wwww.danielsosa.uy</span>
              </Link>

              <Link to="/dev" onClick={this.openOpenCloseMenu.bind(this)} className="dev-nav-link" activeClassName="selected" onlyActiveOnIndex>
                <HomeIcon className="dev-nav-link-icon" />
                <span className="dev-nav-link-text">{LANG.home}</span>
              </Link>

              <Link to="/dev/work" onClick={this.openOpenCloseMenu.bind(this)} className="dev-nav-link" activeClassName="selected">
                <WorkIcon className="dev-nav-link-icon" />
                <span className="dev-nav-link-text">{LANG.work}</span>
              </Link>

              <Link to="/dev/stuff" onClick={this.openOpenCloseMenu.bind(this)} className="dev-nav-link" activeClassName="selected">
                <StufIcon className="dev-nav-link-icon" />
                <span className="dev-nav-link-text">{LANG.stuff}</span>
              </Link>

              <Link to="https://github.com/danieluy" className="dev-nav-link nav-link-external" target="_blank">
                <svg className="dev-nav-link-icon" height="24" viewBox="0 0 1024 1024" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z" />
                </svg>
                <span className="dev-nav-link-text">{LANG.github}</span>
              </Link>

              <Link to="/dev/academic" onClick={this.openOpenCloseMenu.bind(this)} className="dev-nav-link" activeClassName="selected">
                <svg className="dev-nav-link-icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
                <span className="dev-nav-link-text">{LANG.academic}</span>
              </Link>

              <Link to="/dev/contact" onClick={this.openOpenCloseMenu.bind(this)} className="dev-nav-link" activeClassName="selected">
                <svg className="dev-nav-link-icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <span className="dev-nav-link-text">{LANG.contact}</span>
              </Link>

            </div>

            <button onClick={() => { this.props.parentMethods.toggleLang(); this.openOpenCloseMenu.call(this); }} className="dev-btn-toggle-lang" type="button" title={LANG.toggle_lang}>
              <svg className="dev-nav-link-icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
              </svg>
            </button>

          </div>
          {/*END dev-nav-actions*/}

          {/*dev-nav-links-background*/}
          <div onClick={this.openOpenCloseMenu.bind(this)} className={this.state.display_menu_background}></div>


        </nav>
      </header>
    );
  }
}

export default DevNavbar;
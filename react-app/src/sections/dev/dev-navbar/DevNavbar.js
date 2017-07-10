import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import './DevNavbar.css';

import { CodeIcon, MenuIcon, HomeIcon, WorkIcon, StufIcon, GitHubIcon, AcademicIcon, ContactIcon, LanguageIcon } from '../../../assets/icons';

class DevNavbar extends PureComponent {

  constructor() {
    super();
    this.state = {
      display_menu: 'dev-nav-actions',
      display_menu_background: 'dev-nav-links-background',
    }
  }

  hoverNavbar(hover) {
    const window_width = window.innerWidth;
    return hover || window_width > 960 ? { boxShadow: '0 2px 4px rgba(0, 0, 0, .5)' } : { boxShadow: 'none' }
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
                <GitHubIcon className="dev-nav-link-icon" />
                <span className="dev-nav-link-text">{LANG.github}</span>
              </Link>

              <Link to="/dev/academic" onClick={this.openOpenCloseMenu.bind(this)} className="dev-nav-link" activeClassName="selected">
                <AcademicIcon className="dev-nav-link-icon" />
                <span className="dev-nav-link-text">{LANG.academic}</span>
              </Link>

              <Link to="/dev/contact" onClick={this.openOpenCloseMenu.bind(this)} className="dev-nav-link" activeClassName="selected">
                <ContactIcon className="dev-nav-link-icon" />
                <span className="dev-nav-link-text">{LANG.contact}</span>
              </Link>

            </div>

            <button onClick={() => { this.props.parentMethods.toggleLang(); this.openOpenCloseMenu.call(this); }} className="dev-btn-toggle-lang" type="button" title={LANG.toggle_lang}>
              <LanguageIcon className="dev-nav-link-icon" />
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
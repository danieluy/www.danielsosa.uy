import React, { Component } from 'react';
import './ArqNavbar.css';

const _ = require('lodash');

import { Link } from 'react-router'

import { TriangleIcon, CalendarIcon, LaptopIcon, AcademicIcon, StarIcon, LanguageIcon, TranslateIcon } from '../../../assets/icons';

class ArqNavbar extends Component {
  render() {
    return (
      <div className="arq-navbar">

        <div className="arq-navbar-header">
          <Link href="/" title="Home">
            <TriangleIcon className="arq-navbar-header-icon" />
          </Link>
          <div className="arq-navbar-header-title">
            {this.props.lang.nav.title}
          </div>
        </div>

        <ArqNavbarLink
          icon={AcademicIcon}
          anchor={this.props.lang.education.anchor}
        >
          {this.props.lang.education.header_title}
        </ArqNavbarLink>

        <ArqNavbarLink
          icon={CalendarIcon}
          anchor={this.props.lang.work_history.anchor}
        >
          {this.props.lang.work_history.title}
        </ArqNavbarLink>

        <ArqNavbarLink
          icon={LaptopIcon}
          anchor={this.props.lang.proficiency.anchor}
        >
          {this.props.lang.proficiency.title}
        </ArqNavbarLink>

        <ArqNavbarLink
          icon={LanguageIcon}
          anchor={this.props.lang.languages.anchor}
        >
          {this.props.lang.languages.title}
        </ArqNavbarLink>

        <ArqNavbarLink
          icon={StarIcon}
          anchor={this.props.lang.achievements.anchor}
        >
          {this.props.lang.achievements.title}
        </ArqNavbarLink>

        <button onClick={this.props.toggleLang} className="arq-navbar-btn-translate">
          <TranslateIcon />
        </button>

      </div>
    );
  }
}

export default ArqNavbar;

class ArqNavbarLink extends Component {
  constructor(props) {
    super();
    this.state = {
      windowHash: window.location.hash,
      hash: `#${props.anchor}`
    }
  }
  componentDidMount() {
    // debounces 50ms more than the hash setting
    window.addEventListener('scroll', _.debounce(this.updateHash.bind(this), 150))
  }
  updateHash() {
    this.setState({
      windowHash: window.location.hash
    }, this.render.bind(this))
  }
  setActive() {
    return this.state.windowHash === this.state.hash ? 'arq-navbar-item-active' : ''
  }
  render() {
    const Icon = this.props.icon
    return (
      <div className={'arq-navbar-item ' + this.setActive()}>
        <Icon className="arq-navbar-item-icon" />
        <Link className="arq-navbar-item-link" href={this.state.hash}>
          {this.props.children}
        </Link>
      </div>
    )
  }
}
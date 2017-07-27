import React, { Component } from 'react';
import './ArqNavbar.css';

import { Link } from 'react-router'

import { TriangleIcon, CalendarIcon, LaptopIcon, AcademicIcon, StarIcon, LanguageIcon } from '../../../assets/icons';

class ArqNavbar extends Component {
  render() {
    return (
      <div className="arq-navbar">

        <div className="arq-navbar-header">
          <a href="/" title="Home">
            <TriangleIcon className="arq-navbar-header-icon" />
          </a>
          <div className="arq-navbar-header-title">
            {this.props.lang.nav.title}
          </div>
        </div>

        <ArqNavbarLink icon={AcademicIcon}>{this.props.lang.education.header_title}</ArqNavbarLink>

        <ArqNavbarLink icon={CalendarIcon}>{this.props.lang.work_history.title}</ArqNavbarLink>

        <ArqNavbarLink icon={LaptopIcon}>{this.props.lang.proficiency.title}</ArqNavbarLink>

        <ArqNavbarLink icon={LanguageIcon}>{this.props.lang.languages.title}</ArqNavbarLink>

        <ArqNavbarLink icon={StarIcon}>{this.props.lang.achievements.title}</ArqNavbarLink>

      </div>
    );
  }
}

export default ArqNavbar;

class ArqNavbarLink extends Component {
  setActive() {
    return window.location.hash === `#${this.removeSpaces(this.props.children)}` ? 'arq-navbar-item-active' : ''
  }
  removeSpaces(str) {
    return str.replace(' ', '_')
  }
  render() {
    const Icon = this.props.icon
    return (
      <div className={'arq-navbar-item ' + this.setActive()}>
        <Icon className="arq-navbar-item-icon" />
        <Link className="arq-navbar-item-link" href={`#${this.removeSpaces(this.props.children)}`}>
          {this.props.children}
        </Link>
      </div>
    )
  }
}
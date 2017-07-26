import React, { Component } from 'react';
import './ArqNavbar.css';

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

        <div className="arq-navbar-item">
           <AcademicIcon className="arq-navbar-item-icon" /> 
          <a className="arq-navbar-item-link" href={`#arq-content-ancor-${this.props.lang.education.header_title}`}>{this.props.lang.education.header_title}</a>
        </div>

        <div className="arq-navbar-item">
           <CalendarIcon className="arq-navbar-item-icon" /> 
          <a className="arq-navbar-item-link" href={`#arq-content-ancor-${this.props.lang.work_history.title}`}>{this.props.lang.work_history.title}</a>
        </div>

        <div className="arq-navbar-item">
           <LaptopIcon className="arq-navbar-item-icon" /> 
          <a className="arq-navbar-item-link" href={`#arq-content-ancor-${this.props.lang.proficiency.title}`}>{this.props.lang.proficiency.title}</a>
        </div>

        <div className="arq-navbar-item">
           <LanguageIcon className="arq-navbar-item-icon" /> 
          <a className="arq-navbar-item-link" href={`#arq-content-ancor-${this.props.lang.languages.title}`}>{this.props.lang.languages.title}</a>
        </div>

        <div className="arq-navbar-item">
           <StarIcon className="arq-navbar-item-icon" /> 
          <a className="arq-navbar-item-link" href={`#arq-content-ancor-${this.props.lang.achievements.title}`}>{this.props.lang.achievements.title}</a>
        </div>

      </div>
    );
  }
}

export default ArqNavbar;
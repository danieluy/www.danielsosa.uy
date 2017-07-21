import React, { Component } from 'react';
import { Link } from 'react-router';
import './ArqNavbar.css';

import { TriangleIcon, CalendarIcon } from '../../../assets/icons';

class ArqNavbar extends Component {
  render() {
    return (
      <div className="arq-navbar">
        <div className="arq-navbar-header">
          <Link to="/">
            <TriangleIcon className="arq-navbar-header-icon" />
          </Link>
          <div className="arq-navbar-header-title">
            {this.props.lang.nav.title}
          </div>
        </div>
        {this.props.lang.work_history.map((work, i) => {
          return (
            <div className="arq-navbar-item">
              <CalendarIcon className="arq-navbar-item-icon" />
              <a className="arq-navbar-item-link" href={`#arq-work-history-year-${work.year}`}>{work.year}</a>
            </div>
          )
        })}
      </div>
    );
  }
}

export default ArqNavbar;
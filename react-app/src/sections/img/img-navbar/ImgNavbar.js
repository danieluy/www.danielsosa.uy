import React, { PureComponent } from 'react';
import './ImgNavbar.css';

import { Link } from 'react-router';

import { RectangleIcon, ArrowBackIcon, SortIcon } from '../../../assets/icons'

class ImgNavbar extends PureComponent {

  constructor() {
    super();
    this.state = {
      menuOpen: false,
      sortMenuOpen: false
    }
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    }, () => { console.log(this.state.menuOpen) })
  }

  toggleSortMenu() {
    this.setState({
      sortMenuOpen: !this.state.sortMenuOpen
    })
  }

  render() {
    return (
      <nav className="img-navbar">
        <RectangleIcon
          className="img-navbar-icon"
          onClick={this.toggleMenu.bind(this)}
        />
        {this.state.menuOpen ?
          <div onClick={this.toggleMenu.bind(this)} className="img-navbar-menu">
            <Link to="/" className="img-navbar-menu-item">
              <ArrowBackIcon className="img-navbar-menu-item-icon" />
              Home
              </Link>
            <div onClick={this.toggleSortMenu.bind(this)} className="img-navbar-menu-item">
              <SortIcon className="img-navbar-menu-item-icon" />
              Sort
              </div>
          </div>
          : null}

        {this.state.sortMenuOpen ?
          <div onClick={this.toggleSortMenu.bind(this)} className="img-sort-menu">
            Sort menu
            </div>
          : null}
      </nav>
    )
  }
}

export default ImgNavbar
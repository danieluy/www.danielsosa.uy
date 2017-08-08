import React, { PureComponent } from 'react';
import './ImgNavbar.css';

import { Link } from 'react-router';

import {
  RectangleIcon,
  ArrowBackIcon,
  SortIcon,
  CalendarIcon,
  CloseIcon,
  SortAlphabeticalIcon,
  ArrowDropDownIcon,
  ArrowDropUpIcon
} from '../../../assets/icons'

class ImgNavbar extends PureComponent {

  constructor() {
    super();
    this.state = {
      menuOpen: false,
      sortMenuOpen: false,
      currentSortMethod: '_default'
    }
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  toggleSortMenu() {
    this.setState({
      sortMenuOpen: !this.state.sortMenuOpen
    })
  }

  sort(method) {
    if (method.name === this.state.currentSortMethod)
      method = this.props.sort[`${method.name}Inv`]
    this.setState({
      currentSortMethod: method.name
    })
    this.props.onSort(method)
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
          <div className="img-sort-menu">
            <div onClick={this.sort.bind(this, this.props.sort._default)} className="img-navbar-menu-item">
              <SortIcon className="img-navbar-menu-item-icon" />
              Default
              <ImgSortedTelltale
                up={'_default'}
                down={'_defaultInv'}
                current={this.state.currentSortMethod}
              />
            </div>
            <div onClick={this.sort.bind(this, this.props.sort.title)} className="img-navbar-menu-item">
              <SortAlphabeticalIcon className="img-navbar-menu-item-icon" />
              Title
              <ImgSortedTelltale
                up={'title'}
                down={'titleInv'}
                current={this.state.currentSortMethod}
              />
            </div>
            <div onClick={this.sort.bind(this, this.props.sort.year)} className="img-navbar-menu-item">
              <CalendarIcon className="img-navbar-menu-item-icon" />
              Year
              <ImgSortedTelltale
                up={'year'}
                down={'yearInv'}
                current={this.state.currentSortMethod}
              />
            </div>
            <div onClick={this.toggleSortMenu.bind(this)} className="img-navbar-menu-item" style={{ padding: '0' }}>
              <CloseIcon className="img-navbar-menu-item-icon" />
            </div>
          </div>
          : null}

      </nav>
    )
  }
}

export default ImgNavbar

class ImgSortedTelltale extends PureComponent {
  get upStyle() {
    if (this.props.up === this.props.current)
      return { fill: '#000000' }
    return null
  }
  get downStyle() {
    if (this.props.down === this.props.current)
      return { fill: '#000000' }
    return null
  }
  render() {
    return (
      <div className="img-sorted-telltale">
        <ArrowDropUpIcon className="img-sorted-telltale-icon" style={this.upStyle} />
        <ArrowDropDownIcon className="img-sorted-telltale-icon" style={this.downStyle} />
      </div>
    )
  }
}
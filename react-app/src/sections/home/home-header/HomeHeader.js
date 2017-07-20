import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import './HomeHeader.css';

import { TriangleIcon, CodeIcon, RectangleIcon } from '../../../assets/icons';

class HomeHeader extends PureComponent {

  render() {
    return (
      <div>
        <header className="full-header" id="full-header" style={{ height: `${this.props.window_height}px` }}>
          <nav className="full-nav">
            <ul className="links-list">

              <li className="arq">
                <Link className="nav-link" to="/arq">
                  <TriangleIcon className="nav-icon" height="24" width="24" />
                  <span>arq</span>
                </Link>
              </li>
              <li className="dev">
                <Link className="nav-link" to="/dev">
                  <CodeIcon className="nav-icon" height="24" width="24" />
                  <span>dev</span>
                </Link>
              </li>
              <li className="img">
                <Link className="nav-link" to="/img">
                  <RectangleIcon className="nav-icon" height="24" width="24" />
                  <span>img</span>
                </Link>
              </li>

            </ul>
          </nav>
        </header>

        <div id="footer-pointer">
          <svg fill="#888" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
            <path d="M0-.75h24v24H0z" fill="none" />
          </svg>
        </div>

      </div>
    );
  }
}

export default HomeHeader;
import React, { PureComponent } from 'react';
import { Link } from 'react-router';

import './Placeholder.css';

class Placeholder extends PureComponent {
  render() {

    const lang = this.props.lang;

    return (
      <Link className="placeholder" to="/" style={{height: `${window.innerHeight}px`}}>
        <img className="placeholder-img" src={require(`../../assets/img/${lang.placeholder}`)} alt="" />
        <div className="placeholder-title">{lang.title}</div>
        <div className="placeholder-subtitle">{lang.subtitle}</div>
      </Link>
    );
  }
}

export default Placeholder;
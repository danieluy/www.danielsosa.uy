import React, { Component } from 'react';
import './DevContentActions.css';

import { LinkIcon } from '../../../assets/icons';

class DevContentActions extends Component {
  
  renderActions() {
    if (Array.prototype.isPrototypeOf(this.props.actions))
      return this.props.actions.map((action, i) => <div key={i}>{action}</div>);
    return <div>{this.props.actions}</div>
  }
  render() {
    return (
      <div className="dev-content-actions">
        {this.renderActions()}
      </div>
    );
  }
}

export default DevContentActions;

export class DevContentLink extends Component {
  
  setIcon() {
    if (this.props.icon) {
      return React.cloneElement(this.props.icon, {
        className: 'dev-content-icon'
      })
    }
    return (<LinkIcon className='dev-content-icon' />);
  }
  render() {
    return (
      <a
        className='dev-content-link'
        href={this.props.href}
        target={this.props.target || '_self'}
        style={this.props.style}
      >
        {this.setIcon()}
        {this.props.text}
      </a>
    )
  }
}

export class DevContentButton extends Component {
  
  setIcon() {
    if (this.props.icon) {
      return React.cloneElement(this.props.icon, {
        className: 'dev-content-icon'
      })
    }
    return;
  }
  render() {
    return (
      <button
        className='dev-content-button'
        onClick={this.props.onClick}
        style={this.props.style}
      >
        {this.setIcon()}
        {this.props.text}
      </button>
    )
  }
}
import React, { PureComponent } from 'react';
import './DevTechBadge.css';

class DevTechBadge extends PureComponent {

  render() {

    const LANG = this.props.lang;

    return (
      <a href={LANG.title.href} target="_blank">
        <div className="dev-tech-badge">
          <img
            className="dev-tech-badge-img"
            src={require(`../../../assets/img/dev/techs/${LANG.icon.src}`)}
            alt={LANG.icon.alt}
            title={LANG.title.text}
          />
        </div>
      </a>
    );

  }
}

export default DevTechBadge;
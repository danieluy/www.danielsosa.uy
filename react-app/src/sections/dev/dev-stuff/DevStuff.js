import React, { PureComponent } from 'react';
import './DevStuff.css';

import DsGallery from 'ds-gallery';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';
import DevContentActions, { DevContentLink } from '../dev-content-actions/DevContentActions';
import DevTechBadge from '../dev-tech-badge/DevTechBadge';

import { GitHubIcon } from '../../../assets/icons';

class DevStuff extends PureComponent {

  setBadges(techs) {
    return techs.map((tech, i) => <DevTechBadge key={i} lang={tech} />)
  }

  render() {

    const LANG = this.props.lang.stuff;

    return (
      <div>
        <DevContentTitle title={LANG.title} />
        <div className="dev-container">
          {LANG.stuff.map((stuff, i) => {
            return (
              <div key={i}>
                <DevContentHeader
                  title={`${stuff.title} v${stuff.current_version}`}
                  subtitle={stuff.subtitle}
                  avatar={stuff.logo}
                />
                <div className="dev-gallery-wrapper">
                  <DsGallery images={stuff.gallery} />
                </div>
                <div className="dev-info-wrapper">

                  <label className="dev-label">{LANG.label.techs}</label>
                  <div className="dev-tech-badges">
                    {this.setBadges(stuff.techs)}
                  </div>

                  <label className="dev-label">{LANG.label.description}</label>
                  <p className="dev-paragraph">{stuff.description}</p>

                  <label className="dev-label">{LANG.label.license}</label>
                  <p className="dev-paragraph">{stuff.license}</p>

                  <DevContentActions
                    actions={stuff.refs.map(link => <DevContentLink text={link.text} href={link.href} />)}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default DevStuff;
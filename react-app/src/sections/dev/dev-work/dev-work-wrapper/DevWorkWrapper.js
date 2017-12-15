import React, { PureComponent } from 'react';
import './DevWorkWrapper.css';

import DsGallery from 'ds-gallery';
import DevTechBadge from '../../dev-tech-badge/DevTechBadge';
import DevContentHeader from '../../dev-content-header/DevContentHeader';

import { LinkIcon } from '../../../../assets/icons';
import { COLOR } from '../../../../assets/styles';

class DevWorkWrapper extends PureComponent {

  setBadges(techs) {
    return techs.map((tech, i) => <DevTechBadge key={i} lang={tech} />)
  }

  setYear(){
    if(typeof this.props.lang.year === 'object')
      return `${this.props.lang.year.from} - ${this.props.lang.year.to}`
    return this.props.lang.year
  }
  render() {

    const LANG = this.props.lang;
    return (
      <div>

        <DevContentHeader
          title={LANG.title}
          subtitle={`${LANG.modality} ${this.setYear()}`}
          avatar={LANG.logo.src}
        />

        {/* <h2 className="dev-title-1">{LANG.title}</h2> */}

        <div className="dev-gallery-wrapper">
          <DsGallery images={LANG.images.map(obj => obj.src)} />
        </div>


        <div className="dev-info-wrapper">

          <label className="dev-label">{this.props.labels.technologies}</label>
          <div className="dev-tech-badges">
            {this.setBadges(LANG.techs)}
          </div>

          <label className="dev-label">{this.props.labels.description}</label>
          <p className="dev-paragraph">{LANG.description}</p>

          <label className="dev-label">{this.props.labels.client_name}</label>
          <div className="dev-work-client-wrapper">
            <p className="dev-paragraph">
              {LANG.client_name}
              <a className="dev-work-client-link" href={LANG.client_href} target="_blank" title={LANG.client_href}>
                <LinkIcon fill={COLOR.PRIMARY} />
              </a>
            </p>
          </div>

          <label className="dev-label">{this.props.labels.status}</label>
          <p className="dev-paragraph">{LANG.status}</p>

        </div>

      </div>
    );
  }

}

export default DevWorkWrapper;
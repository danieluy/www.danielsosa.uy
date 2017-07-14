import React, { PureComponent } from 'react';
import './DevHome.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';

class DevHome extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.lang.home.title !== nextProps.lang.home.title;
  // }

  render() {

    const LANG = this.props.lang.home;

    return (
      <div>
        <DevContentTitle title={LANG.title} />
        <div className="dev-container">
          <DevContentHeader title={LANG.header_1.title} subtitle={LANG.header_1.subtitle} avatar={LANG.header_1.avatar} />
          {/*<DevContentHeader title={LANG.header_2.title} subtitle={LANG.header_2.subtitle} avatar={LANG.header_2.avatar} />*/}
          <div className="dev-info-wrapper">

            <h2 className="dev-title-1">{LANG.h2titles[0]}</h2>
            <p className="dev-paragraph" dangerouslySetInnerHTML={{ __html: LANG.paragraph_1 }}></p>

            <h2 className="dev-title-1">{LANG.h2titles[1]}</h2>
            <div className="dev-tech-items">
              {LANG.techs.map((tech, i) => (
                <div key={i} className="dev-tech-item">
                  <div className="dev-tech-header">
                    <img src={require(`../../../assets/img/dev/techs/${tech.icon.src}`)} alt={tech.icon.src} />
                  </div>
                  <div className="dev-tech-body">
                    <a href={tech.title.href} target="_blank">{tech.title.text}</a>
                    <p>{tech.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DevHome;
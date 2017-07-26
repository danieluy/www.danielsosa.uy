import React, { PureComponent } from 'react';
import './ArqContent.css';

import ArqGraph from '../arq-graph/ArqGraph';

import { CalendarIcon, LaptopIcon, AcademicIcon, StarIcon, LanguageIcon } from '../../../assets/icons';

class ArqContent extends PureComponent {
  render() {
    return (

      <div className="arq-content">

        <ArqContentTitle
          title={this.props.lang.education.header_title}
          icon={AcademicIcon}
        />
        <div className="arq-content-section">
          <h1 className="arq-title color-red">{this.props.lang.education.title}</h1>
          <h2 className="arq-subtitle">Anteproyecto 5 aprobado.</h2>
          <p className="arq-paragraph">Interrumpida en 2014</p>
        </div>

        <ArqContentTitle
          title={this.props.lang.work_history.title}
          icon={CalendarIcon}
        />
        <div className="arq-content-section">
          {this.props.lang.work_history.items.map((work, i) => {
            return (
              <div key={i} className="arq-work-history-item">
                <h1 className="arq-title color-red">{work.title}</h1>
                <h2 className="arq-subtitle">{work.subtitle}</h2>
                <p className="arq-paragraph">{work.year}{work.to ? ` - ${work.to}` : ''}</p>
                {work.paragraphs.map((paragraph, i) => <p key={i} className="arq-paragraph">{paragraph}</p>)}
              </div>
            )
          })}
        </div>

        <ArqContentTitle
          title={this.props.lang.proficiency.title}
          icon={LaptopIcon}
        />
        <div className="arq-content-section">
          <div className="arq-content-proficiency">
            {this.props.lang.proficiency.items.map((item, i) => {
              return (
                <ArqGraph
                  key={i}
                  title={item.title}
                  proficiency={item.proficiency}
                  width="100px"
                />
              )
            })}
          </div>
        </div>

        <ArqContentTitle
          title={this.props.lang.languages.title}
          icon={LanguageIcon}
        />
        <div className="arq-content-section">
          <div className="arq-content-proficiency">
            {this.props.lang.languages.items.map((item, i) => {
              return (
                <ArqGraph
                  key={i}
                  title={item.title}
                  proficiency={item.proficiency}
                  width="100px"
                />
              )
            })}
          </div>
        </div>

        <ArqContentTitle
          title={this.props.lang.achievements.title}
          icon={StarIcon}
        />
        <div className="arq-content-section">
          {this.props.lang.achievements.items.map((item, i) => {
            return (
              <div key={i} className="arq-content-achievement">
                <h1 className="arq-title color-red">{item.title}</h1>
                <h2 className="arq-subtitle">{item.subtitle}</h2>
                <p className="arq-paragraph">{item.institution}</p>
                <p className="arq-paragraph">{item.date}</p>
              </div>
            )
          })}
        </div>

        <div className="arq-content-footer"></div>
      </div>

    );
  }
}

export default ArqContent;

class ArqContentTitle extends PureComponent {
  logNode(node){
    console.log('node', node.scrollHeight)
  }
  render() {
    const Icon = this.props.icon;
    return (
      <div
        id={`arq-content-ancor-${this.props.title}`}
        className="arq-content-title"
        ref={this.logNode}
      >
        <Icon className="arq-content-title-icon" />
        <div className="arq-content-title-text">
          {this.props.title}
        </div>
      </div>
    )
  }
}
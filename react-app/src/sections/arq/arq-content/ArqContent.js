import React, { PureComponent } from 'react';
import './ArqContent.css';

import ArqGraph from '../arq-graph/ArqGraph';

import { CalendarIcon, LaptopIcon, AcademicIcon, StarIcon, LanguageIcon } from '../../../assets/icons';

class ArqContent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      anchors: []
    }
  }

  componentDidUpdate() {
    this.setAndResetAnchors();
  }

  componentDidMount() {
    this.setAndResetAnchors();
  }

  setAndResetAnchors() {
    this.props.setAchors(this.state.anchors);
    this.setState({
      anchors: []
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.windowWidth !== this.props.windowWidth)
      return true; //accounts for window width changes
    if (nextProps.lang.achievements.title !== this.props.lang.achievements.title)
      return true; //accounts for language changes
    return false;
  }

  addAchor(node) {
    if (node) {
      const auxState = this.state.anchors
      auxState.push({ id: node.getAttribute('id'), offsetTop: node.offsetTop })
      this.setState({
        anchors: auxState
      })
    }
  }

  render() {
    return (

      <div className="arq-content">

        {/* <div className="arq-content-header"></div> */}

        <ArqContentTitle
          title={this.props.lang.education.header_title}
          windowWidth={this.props.windowWidth}
          icon={AcademicIcon}
          addAchor={this.addAchor.bind(this)}
        />
        <div className="arq-content-section">
          <h1 className="arq-title color-red">{this.props.lang.education.title}</h1>
          <h2 className="arq-subtitle">Anteproyecto 5 aprobado.</h2>
          <p className="arq-paragraph">Interrumpida en 2014</p>
        </div>

        <ArqContentTitle
          title={this.props.lang.work_history.title}
          windowWidth={this.props.windowWidth}
          icon={CalendarIcon}
          addAchor={this.addAchor.bind(this)}
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
          windowWidth={this.props.windowWidth}
          icon={LaptopIcon}
          addAchor={this.addAchor.bind(this)}
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
          windowWidth={this.props.windowWidth}
          icon={LanguageIcon}
          addAchor={this.addAchor.bind(this)}
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
          windowWidth={this.props.windowWidth}
          icon={StarIcon}
          addAchor={this.addAchor.bind(this)}
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
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.windowWidth !== this.props.windowWidth)
      return true;
    return false;
  }
  removeSpaces(str) {
    return str.replace(' ', '_')
  }
  render() {
    const Icon = this.props.icon;
    return (
      <div
        id={this.removeSpaces(this.props.title)}
        className="arq-content-title"
        ref={this.props.addAchor}
      >
        <Icon className="arq-content-title-icon" />
        <div className="arq-content-title-text">
          {this.props.title}
        </div>
      </div>
    )
  }
}
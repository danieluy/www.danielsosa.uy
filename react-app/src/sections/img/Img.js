import React, { PureComponent } from 'react';
import './Img.css';

import ImgNavbar from './img-navbar/ImgNavbar'

import { getSystemLanguage } from '../../utils'

import { es as ES, en as EN } from '../../assets/lang/lang-img';

class Img extends PureComponent {

  constructor() {
    super();
    this.state = {
      lang: getSystemLanguage(),
      renders: [],
      sort: null
    }
  }

  sortF = {
    title: (a, b) => a.title > b.title,
    titleInv: (a, b) => a.title < b.title,
    year: (a, b) => a.year - b.year,
    yearInv: (a, b) => b.year - a.year
  }

  componentWillMount() {
    this.sortRenders()
  }

  sortRenders() {
    const lang = this.state.lang === 'es' ? ES : EN;
    const renders = []
    lang.projects
      .forEach(project => {
        project.renders
          .forEach(render => {
            renders.push({
              title: project.title,
              paragraphs: project.paragraphs,
              year: project.year,
              labels: render.labels,
              url: render.url,
              alt: project.title
            })
          })
      });
    if (this.state.sort)
      renders.sort(this.sortF)
    this.setState({
      renders: renders
    })
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.props.setStatusBarThemeColor('#ffbb00');
  }

  render() {

    const lang = this.state.lang === 'es' ? ES : EN;
    console.log(this.state.renders)

    return (
      <div className="img-root">

        <ImgNavbar />

        {this.state.renders.map((render, i) => {
          return (
            <div key={i} style={{ width: '100%', height: `${this.props.window_height}px` }}>
              <ImgContent
                title={render.title}
                subtitle={render.year}
                paragraphs={render.paragraphs}
                year={render.year}
                src={render.url}
                alt={render.title}
              />
              <ImgBackgroundFixed
                url={render.url}
              />
            </div>
          )
        })}

      </div>
    );
  }
}

export default Img;

class ImgContent extends PureComponent {
  render() {
    return (
      <div className="img-content">
        <div className="img-content-wrapper">
          <img className="img-content-img" src={this.props.src} alt={this.props.alt} />
          <div className="img-content-info">
            <h1 className="img-content-info-title">{this.props.title}</h1>
            <h2 className="img-content-info-subtitle">{this.props.subtitle}</h2>
            {this.props.paragraphs.map((paragrahp, i) => {
              return <p key={i} className="img-content-info-paragraph">{paragrahp}</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}

class ImgBackgroundFixed extends PureComponent {
  render() {
    return (
      <div className="img-background-fixed">
        <div className="img-background-fixed-lines" />
        <div
          className="img-background-fixed-img"
          style={{
            backgroundImage: `url(${this.props.url})`
          }}
        />
      </div>
    )
  }
}


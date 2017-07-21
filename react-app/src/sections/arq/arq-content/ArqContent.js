import React, { PureComponent } from 'react';
import './ArqContent.css';

class ArqContent extends PureComponent {
  render() {
    console.log(this.props.lang)
    return (
      <div className="arq-work-history">
        {/* <div id="arq-work-history-year-2013" className="arq-work-history-year">
          2013
        </div> */}
        {this.props.lang.work_history.map((work, i) => {
          return (
            <div key={i}>
              <ArqWorkHistoryYear year={work.year} />
              <ArqWorkHistoryItem
                key={i}
                title={work.title}
                subtitle={work.subtitle}
                paragraphs={work.paragraphs}
              />
            </div>
          )
        })}
        <div className="arq-content-footer"></div>
      </div>
    );
  }
}

export default ArqContent;

class ArqWorkHistoryYear extends PureComponent {
  render() {
    return (
      <div id={`arq-work-history-year-${this.props.year}`} className="arq-work-history-year">
        {this.props.year}
      </div>
    )
  }
}

class ArqWorkHistoryItem extends PureComponent {
  render() {
    return (
      <div className="arq-work-history-item">
        <h1 className="arq-title">{this.props.title}</h1>
        <h2 className="arq-subtitle">{this.props.subtitle}</h2>
        {this.props.paragraphs.map((paragraph, i) => <p key={i} className="arq-paragraph">{paragraph}</p>)}
      </div>
    )
  }
}
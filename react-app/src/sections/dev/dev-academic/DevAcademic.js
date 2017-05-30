import React, { Component } from 'react';
import './DevAcademic.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';
import DevAcademicCareerWrapper from './dev-academic-career-wrapper/DevAcademicCareerWrapper';

class DevAcademic extends Component {

  setContentHeaderAction(career) {
    return (
      <div className="dev-content-action" style={{ backgroundColor: career.color_theme }}>
        <a href={career.page} target="_blank">
          <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
          </svg>
        </a>
      </div>
    )
  }


  setCareers(careers) {
    return careers.map((career, i) => {
      return (
        <div key={i}>
          <DevContentHeader
            title={career.name}
            title_append={this.setTitleAppend(career)}
            subtitle={career.institution.name}
            avatar={career.institution.logo.src}
            action={this.setContentHeaderAction(career)}
          />
          <DevAcademicCareerWrapper labels={this.props.lang.academic.labels} career={career} />
        </div>
      )
    })
  }

  setTitleAppend(career) {
    return `${career.status} (${this.props.lang.academic.labels.average} ${this.scoresAverage(career.subjects)}/100)`;
  }

  scoresAverage(subjects) {
    return Math.round(subjects
      .map(subject => subject.score)
      .filter(score => typeof score === 'number')
      .reduce((avg, score, i, scores) => avg + (score / scores.length), 0))
  }

  render() {

    const LANG = this.props.lang.academic;  
    return (
      <div>

        <DevContentTitle title={LANG.title} />

        {this.setCareers(LANG.careers)}

      </div>
    );
  }

}

export default DevAcademic;
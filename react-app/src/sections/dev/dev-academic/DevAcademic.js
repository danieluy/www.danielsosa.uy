import React, { PureComponent } from 'react';
import './DevAcademic.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';
import DevAcademicCareerWrapper from './dev-academic-career-wrapper/DevAcademicCareerWrapper';

import { LinkIcon } from '../../../assets/icons';

class DevAcademic extends PureComponent {

  contentHeaderAction(career) {
    return (
      <div className="dev-content-action" title={career.page}>
        <a href={career.page} target="_blank">
          <LinkIcon fill="#FFFFFF" />
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
            action={this.contentHeaderAction(career)}
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
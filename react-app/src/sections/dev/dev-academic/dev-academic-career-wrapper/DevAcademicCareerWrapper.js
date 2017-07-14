import React, { PureComponent } from 'react';
import './DevAcademicCareerWrapper.css';

import DevContentActions, { DevContentLink } from '../../dev-content-actions/DevContentActions';

class DevAcademicCareerWrapper extends PureComponent {

  setSubjects(subjects) {
    return subjects.map((subject, i) => {
      return (
        <div key={i} className="dev-academic-career-subject">
          <div className="dev-academic-career-subject-score">{subject.score}</div>
          <div className="dev-academic-career-subject-info">
            <div className="dev-academic-career-subject-name">{subject.name}</div>
            <div className="dev-academic-career-subject-techs">{subject.techs}</div>
          </div>
        </div>
      )
    })
  }

  render() {

    const career = this.props.career;

    return (
      <div className="dev-academic-career">

        <div className="dev-academic-career-header">
          <div className="dev-academic-carrer-header-score">{this.props.labels.grade}</div>
          <div className="dev-academic-carrer-header-subject_name">{this.props.labels.subject_name}</div>
        </div>

        <div className="dev-academic-career-subjects">
          {this.setSubjects(career.subjects)}
          <DevContentActions
            actions={<DevContentLink text={career.refs[0].text} href={career.refs[0].href} />}
          />
        </div>


      </div>
    );
  }
}

export default DevAcademicCareerWrapper;
import React, { Component } from 'react';
import './DevContact.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';
import DevContactEmailForm from './dev-contact-email-form/DevContactEmailForm';

import ajax from '../../../ajax';

class DevContact extends Component {

  email_form = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  submitEmailReq() {
    ajax.email(this.email_form, () => { console.log('Message has been sent') })
  }

  setEmailValues(inputs) {
    this.email_form = {
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      message: inputs.message
    }
  }

  setDevContentHeaderMailAction(mail) {
    return (
      <div className="dev-content-action" style={{ backgroundColor: mail.color_theme }}>
        <svg onClick={this.submitEmailReq.bind(this)} fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    )
  }

  setDevContentHeaderCallAction(phone) {
    return (
      <div className="dev-content-action" style={{ backgroundColor: phone.color_theme }}>
        <a href="tel:0059899636065" target="_blank">
          <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>
    )
  }

  render() {

    const contact = this.props.lang.contact;

    return (
      <div>
        <DevContentTitle title={contact.title} />
        <DevContentHeader
          title={contact.phone.title}
          subtitle={contact.phone.subtitle}
          avatar={contact.phone.icon}
          action={this.setDevContentHeaderCallAction(contact.phone)}
        />
        <DevContentHeader
          title={contact.mail.title}
          subtitle={contact.mail.subtitle}
          avatar={contact.mail.icon}
          action={this.setDevContentHeaderMailAction(contact.mail)}
        />
        <DevContactEmailForm
          lang={contact.mail}
          formValues={this.email_form}
          setValues={this.setEmailValues.bind(this)} />
      </div>
    );
  }
}

export default DevContact;
import React, { PureComponent } from 'react';
import './DevContact.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';
import DevContactEmailForm from './dev-contact-email-form/DevContactEmailForm';

import { PhoneIcon, SendIcon } from '../../../assets/icons';

import ajax from '../../../ajax';

class DevContact extends PureComponent {

  constructor(props) {
    super();
    this.notify = props.notify;
  }

  email_form = null;

  emailRequest() {
    if (this.email_form)
      ajax.email(this.email_form, (err, body) => {
        if (err) {
          this.notify(this.props.lang.contact.error.conection);
          console.error(err, err.stack);
        }
        else
          this.notify(this.props.lang.contact.message.success);
      });
    else
      this.notify(this.props.lang.contact.alert.validation);
  }

  setEmailValues(inputs) {
    if (inputs)
      this.email_form = {
        name: inputs.name,
        email: inputs.email,
        phone: inputs.phone,
        message: inputs.message
      }
    else
      this.email_form = null;
  }

  setDevContentHeaderMailAction(mail) {
    return (
      <div className="dev-content-action">
        <SendIcon style={{ fill: '#888888' }} onClick={this.emailRequest.bind(this)} height="24" width="24" />
      </div>
    )
  }

  setDevContentHeaderCallAction(phone) {
    return (
      <div className="dev-content-action">
        <a href="tel:0059899636065" target="_blank">
          <PhoneIcon height="24" width="24" />
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
          title={contact.mail.title}
          subtitle={contact.mail.subtitle}
          avatar={contact.mail.icon}
          action={this.setDevContentHeaderMailAction(contact.mail)}
        />
        <DevContactEmailForm
          lang={contact.mail}
          parentMethods={{ setValues: this.setEmailValues.bind(this) }}
        />
        <DevContentHeader
          title={contact.phone.title}
          subtitle={contact.phone.subtitle}
          avatar={contact.phone.icon}
          action={this.setDevContentHeaderCallAction(contact.phone)}
        />
      </div>
    );
  }
}

export default DevContact;
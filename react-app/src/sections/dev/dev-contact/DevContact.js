import React, { PureComponent } from 'react';
import './DevContact.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';
import DevContactEmailForm from './dev-contact-email-form/DevContactEmailForm';
import DevContentActions, { DevContentLink, DevContentButton } from '../dev-content-actions/DevContentActions';

import { PhoneIcon, SendIcon } from '../../../assets/icons';

import ajax from '../../../ajax';

class DevContact extends PureComponent {

  email_form = null;

  emailRequest() {
    if (this.email_form)
      ajax.email(this.email_form, (err, body) => {
        if (err) {
          this.props.notify(this.props.lang.contact.error.conection);
          console.error(err, err.stack);
        }
        else
          this.props.notify(this.props.lang.contact.message.success);
      });
    else
      this.props.notify(this.props.lang.contact.alert.validation);
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

  // setDevContentHeaderMailAction(mail) {
  //   return (
  //     <div className="dev-content-action">
  //       <SendIcon style={{ fill: '#888888' }} onClick={this.emailRequest.bind(this)} height="24" width="24" />
  //     </div>
  //   )
  // }

  // setDevContentHeaderCallAction(phone) {
  //   return (
  //     <div className="dev-content-action">
  //       <a href="tel:0059899636065" target="_blank">
  //         <PhoneIcon height="24" width="24" />
  //       </a>
  //     </div>
  //   )
  // }

  render() {

    const contact = this.props.lang.contact;

    return (
      <div>
        <DevContentTitle title={contact.title} />
        <div className="dev-container">
          <DevContentHeader
            title={contact.mail.title}
            subtitle={contact.mail.subtitle}
            avatar={contact.mail.icon}
          //action={this.setDevContentHeaderMailAction(contact.mail)}
          />
          <DevContactEmailForm
            lang={contact.mail}
            parentMethods={{ setValues: this.setEmailValues.bind(this) }}
          />
          <div className="dev-contact-actions">
            <DevContentActions
              actions={
                <DevContentButton
                  text={contact.mail.title}
                  icon={<SendIcon height="24" width="24" />}
                  onClick={this.emailRequest.bind(this)}
                  style={{backgroundColor: contact.mail.color_theme}}
                />
              }
            />
          </div>
          <DevContentHeader
            title={contact.phone.title}
            subtitle={contact.phone.subtitle}
            avatar={contact.phone.icon}
          //action={this.setDevContentHeaderCallAction(contact.phone)}
          />
          <div className="dev-contact-actions">
            <DevContentActions
              actions={
                <DevContentLink
                  text={contact.phone.title}
                  href={'tel:0059899636065'}
                  icon={<PhoneIcon height="24" width="24" />}
                  target={'_blank'}
                  style={{backgroundColor: contact.phone.color_theme}}
                />
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DevContact;
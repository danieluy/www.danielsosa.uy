import React, { PureComponent } from 'react';
import './DevContact.css';

import Recaptcha from 'react-recaptcha';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';
import DevContactEmailForm from './dev-contact-email-form/DevContactEmailForm';
import DevContentActions, { DevContentLink, DevContentButton } from '../dev-content-actions/DevContentActions';

import { PhoneIcon, SendIcon } from '../../../assets/icons';

import ajax from '../../../ajax';

class DevContact extends PureComponent {

  constructor() {
    super();
    this.state = {
      disableSubmitButton: true
    }
  }

  email_form = null;
  captcha = null;

  emailRequest() {
    if (this.email_form) {
      if (this.captcha) {
        this.email_form['g-recaptcha-response'] = this.captcha
        ajax.email(this.email_form, (err, body) => {
          if (err) {
            if (err.code === 401)
              this.props.notify(this.props.lang.contact.alert.captcha);
            else
              this.props.notify(this.props.lang.contact.error.conection);
            console.error(err);
          }
          else
            this.props.notify(this.props.lang.contact.message.success);
        });
      }
      else
        this.props.notify(this.props.lang.contact.alert.captcha);
    }
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

  captchaVerifyCallback(response) {
    if (response)
      this.setState({
        disableSubmitButton: false
      })
    this.captcha = response;
  }
  captchaOnloadCallback() {
    console.log('reCAPTCHA widget loaded');
  }

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
          />
          <DevContactEmailForm
            lang={contact.mail}
            parentMethods={{ setValues: this.setEmailValues.bind(this) }}
          />
          <div className="dev-contact-captcha-wrapper">
            <Recaptcha
              sitekey="6Lf9rikUAAAAAKTuY2GtFFzxn-_zoKMkeDPcGygM"
              render="explicit"
              verifyCallback={this.captchaVerifyCallback.bind(this)}
              onloadCallback={this.captchaOnloadCallback}
            />
          </div>
          <div className="dev-contact-actions">
            <DevContentActions
              actions={
                <DevContentButton
                  text={contact.mail.title}
                  icon={<SendIcon height="24" width="24" />}
                  onClick={this.emailRequest.bind(this)}
                  style={{ backgroundColor: contact.mail.color_theme }}
                  disabled={this.state.disableSubmitButton}
                />
              }
            />
          </div>
          <DevContentHeader
            title={contact.phone.title}
            subtitle={contact.phone.subtitle}
            avatar={contact.phone.icon}
          />
          <div className="dev-contact-actions">
            <DevContentActions
              actions={
                <DevContentLink
                  text={contact.phone.title}
                  href={'tel:0059899636065'}
                  icon={<PhoneIcon height="24" width="24" />}
                  target={'_blank'}
                  style={{ backgroundColor: contact.phone.color_theme }}
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
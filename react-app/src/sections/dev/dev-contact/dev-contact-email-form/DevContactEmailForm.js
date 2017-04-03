import React, { Component } from 'react';
import './DevContactEmailForm.css';

class DevContactEmailForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: props.formValues.name,
        valid: false,
        touched: false
      },
      email: {
        value: props.formValues.email,
        valid: false,
        touched: false
      },
      phone: {
        value: props.formValues.phone,
        valid: false,
        touched: false
      },
      message: {
        value: props.formValues.message,
        valid: false,
        touched: false
      }
    }
  }

  setValues(evt) {
    switch (evt.target.getAttribute('data-input-name')) {
      case 'name': this.updateName(evt.target.value); break;
      case 'email': this.setState({ email: evt.target.value }); break;
      case 'phone': this.setState({ phone: evt.target.value }); break;
      case 'message': this.setState({ message: evt.target.value }); break;
      default: throw new Error('Unhadled value on comunication email form');
    }
  }

  updateName(name) {
    if (typeof name === 'string' && name.length > 0)
      this.setState({ name: { value: name, valid: true, touched: true } });
    else
      this.setState({ name: { value: '', valid: false, touched: true } });
  }

  updateEmail(email) {
    if (typeof email === 'string' && email.length > 0 && email.trim().match(/^\S+@\S+\.\S+$/))
      this.setState({ email: { value: email, valid: true, touched: true } });
    else
      this.setState({ email: { value: '', valid: false, touched: true } });
  }

  //necesary to handle setState async behaviour
  componentDidUpdate() {
    console.log(this.state.name)
    this.props.setValues(this.state)
  }

  render() {

    const mail = this.props.lang;

    return (
      <div className="dev-contact-email-form">
        <label className="dev-contact-email-form-label">{mail.labels.name}</label>
        <input
          data-input-name="name"
          className="dev-contact-email-form-input"
          onChange={this.setValues.bind(this)} type="text"
          placeholder={mail.placeholders.name}
          value={this.state.name.value}
        />

        <label className="dev-contact-email-form-label">{mail.labels.email}</label>
        <input
          data-input-name="email"
          className="dev-contact-email-form-input"
          onChange={this.setValues.bind(this)} type="email"
          placeholder={mail.placeholders.email}
          value={this.state.email.value}
        />

        <label className="dev-contact-email-form-label">{mail.labels.phone}</label>
        <input
          data-input-name="phone"
          className="dev-contact-email-form-input"
          onChange={this.setValues.bind(this)} type="phone"
          placeholder={mail.placeholders.phone}
          value={this.state.phone.value}
        />

        <label className="dev-contact-email-form-label">{mail.labels.message}</label>
        <textarea
          data-input-name="message"
          className="dev-contact-email-form-input"
          onChange={this.setValues.bind(this)}
          placeholder={mail.placeholders.message}
          value={this.state.message.value}
        />
      </div>
    );
  }
}

export default DevContactEmailForm;
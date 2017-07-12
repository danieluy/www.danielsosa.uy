import React, { PureComponent } from 'react';
import './DevContactEmailForm.css';

const styles = {
  invalid: {
    color: '#f88'
  }
}

class DevContactEmailForm extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        valid: false,
        touched: false
      },
      email: {
        value: '',
        valid: false,
        touched: false
      },
      phone: {
        value: '',
        valid: false,
        touched: false
      },
      message: {
        value: '',
        valid: false,
        touched: false
      }
    }
  }

  //necesary to handle setState async behaviour
  componentDidUpdate() {
    if (this.formIsValid)
      this.props.parentMethods.setValues({
        name: this.state.name.value,
        email: this.state.email.value,
        phone: this.state.phone.value,
        message: this.state.message.value
      })
    else
      this.props.parentMethods.setValues(null)
  }

  get formIsValid() {
    return this.state.name.valid && this.state.email.valid && this.state.phone.valid && this.state.message.valid;
  }

  updateName(evt) {
    evt.preventDefault();
    if (typeof evt.target.value === 'string' && evt.target.value.length > 0)
      this.setState({ name: { value: evt.target.value, valid: true, touched: true } });
    else
      this.setState({ name: { value: '', valid: false, touched: true } });
  }
  updateEmail(evt) {
    evt.preventDefault();
    if (typeof evt.target.value === 'string' && evt.target.value.length > 0 && evt.target.value.trim().match(/^\S+@\S+\.\S+$/))
      this.setState({ email: { value: evt.target.value, valid: true, touched: true } });
    else
      this.setState({ email: { value: evt.target.value, valid: false, touched: true } });
  }
  updatePhone(evt) {
    evt.preventDefault();
    if (typeof evt.target.value === 'string' && evt.target.value.length > 0)
      this.setState({ phone: { value: evt.target.value, valid: true, touched: true } });
    else
      this.setState({ phone: { value: '', valid: false, touched: true } });
  }
  updateMessage(evt) {
    evt.preventDefault();
    if (typeof evt.target.value === 'string' && evt.target.value.length > 0)
      this.setState({ message: { value: evt.target.value, valid: true, touched: true } });
    else
      this.setState({ message: { value: '', valid: false, touched: true } });
  }

  render() {

    const lang = this.props.lang;

    return (
      <div className="dev-contact-email-form">
        {/*Name*/}
        <label
          htmlFor="dev-contact-email-form-name"
          className="dev-contact-email-form-label"
          style={(!this.state.name.valid && this.state.name.touched) ? styles.invalid : null}
        >
          {lang.labels.name}
        </label>
        <input
          id="dev-contact-email-form-name"
          className="dev-contact-email-form-input"
          onChange={this.updateName.bind(this)} type="text"
          placeholder={lang.placeholders.name}
          value={this.state.name.value}
        />
        {/*Email*/}
        <label
          htmlFor="dev-contact-email-form-email"
          className="dev-contact-email-form-label"
          style={(!this.state.email.valid && this.state.email.touched) ? styles.invalid : null}
        >
          {lang.labels.email}
        </label>
        <input
          id="dev-contact-email-form-email"
          className="dev-contact-email-form-input"
          onChange={this.updateEmail.bind(this)} type="email"
          placeholder={lang.placeholders.email}
          value={this.state.email.value}
        />
        {/*Phone*/}
        <label
          htmlFor="dev-contact-email-form-phone"
          className="dev-contact-email-form-label"
          style={(!this.state.phone.valid && this.state.phone.touched) ? styles.invalid : null}
        >
          {lang.labels.phone}
        </label>
        <input
          id="dev-contact-email-form-phone"
          className="dev-contact-email-form-input"
          onChange={this.updatePhone.bind(this)} type="phone"
          placeholder={lang.placeholders.phone}
          value={this.state.phone.value}
        />
        {/*Message*/}
        <label
          htmlFor="dev-contact-email-form-message"
          className="dev-contact-email-form-label"
          style={(!this.state.message.valid && this.state.message.touched) ? styles.invalid : null}
        >
          {lang.labels.message}
        </label>
        <textarea
          id="dev-contact-email-form-message"
          className="dev-contact-email-form-input"
          onChange={this.updateMessage.bind(this)}
          placeholder={lang.placeholders.message}
          value={this.state.message.value}
        />
      </div>
    );
  }
}

export default DevContactEmailForm;
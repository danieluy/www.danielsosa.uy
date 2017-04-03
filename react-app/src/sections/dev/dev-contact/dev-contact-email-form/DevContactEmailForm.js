import React, { Component } from 'react';
import './DevContactEmailForm.css';

class DevContactEmailForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.formValues.name,
      email: props.formValues.email,
      phone: props.formValues.phone,
      message: props.formValues.message
    }
  }

  setValues(evt) {
    switch (evt.target.getAttribute('placeholder')) {
      case 'Nombre': this.setState({name: evt.target.value}); break;
      case 'Email address':  this.setState({email: evt.target.value}); break;
      case 'Phone number': this.setState({phone: evt.target.value}); break;
      case 'Message': this.setState({message: evt.target.value}); break;
      default: throw new Error('Unhadled value on comunication email form');
    }
  }

  //necesary to handle setState async behaviour
  componentDidUpdate(){
    this.props.setValues(this.state)
  }

  render() {
    return (
      <div>
        <input onChange={this.setValues.bind(this)} type="text" placeholder="Nombre" value={this.state.name} />
        <input onChange={this.setValues.bind(this)} type="email" placeholder="Email address" value={this.state.email} />
        <input onChange={this.setValues.bind(this)} type="phone" placeholder="Phone number" value={this.state.phone} />
        <textarea onChange={this.setValues.bind(this)} placeholder="Message" value={this.state.message} />
      </div>
    );
  }
}

export default DevContactEmailForm;
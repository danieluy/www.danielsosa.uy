import React, { Component } from 'react';
import './DevContact.css';

import DevContentTitle from '../dev-content-title/DevContentTitle';
import DevContentHeader from '../dev-content-header/DevContentHeader';

class DevContact extends Component {

  send_icon_markup = {
    __html: `
      <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>`
  }

  call_icon_markup = {
    __html: `
      <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>`
  }

  render() {

    const contact = this.props.lang.contact;
    console.log(contact)

    return (
      <div>
        <DevContentTitle title={contact.title} />
        <DevContentHeader
          title={contact.phone.title}
          subtitle={contact.phone.subtitle}
          avatar={contact.phone.icon}
          color_theme={contact.phone.color_theme}
          link={{
            url: 'tel:0059899636065',
            icon: this.call_icon_markup
          }}
        />
        <DevContentHeader
          title={contact.mail.title}
          subtitle={contact.mail.subtitle}
          avatar={contact.mail.icon}
          color_theme={contact.mail.color_theme}
          link={{
            url: 'https://www.google.com.uy',
            icon: this.send_icon_markup
          }}
        />
      </div>
    );
  }
}

export default DevContact;
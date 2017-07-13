export default {
  title: "Contact me",
  phone: {
    title: "Phone call",
    subtitle: "(+598) 99 636 065",
    icon: "contact/phone_logo_128.jpg",
    icon_alt: "Phone Icon",
    color_theme: "#5667bf"
  },
  mail: {
    title: "Email",
    subtitle: "danielsosa.dev@gmail.com",
    icon: "contact/email_logo_128.jpg",
    icon_alt: "Email Icon",
    color_theme: "#54bfa1",
    labels: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message"
    },
    placeholders: {
      name: "Marla Singer",
      email: "marla@tfc.com",
      phone: "(+598) 99 000 111 | 099000111",
      message: "What can I do for you :)"
    }
  },
  message: {
    success: {
      title: "Success!",
      subtitle: "Your message has been sent",
      body: [
        "Thanks for reaching me, I'll get back to you as soon as I can."
      ],
      type: ''
    }
  },
  alert: {
    validation: {
      title: "Invalid data",
      subtitle: "Check the provided information",
      body: [
        'Name: you must write your name, this field is mandatory.',
        'Email: you must input a valid email address, this field is mandatory.',
        'Phone: you must input a valid phone number, this field is mandatory.',
        'Message: you must write your message, this field is mandatory.'
      ],
      type: 'alert'
    }
  },
  error: {
    conection: {
      title: "Error",
      subtitle: "Your message was not sent",
      body: [
        'It may has occurred one of this problems:',
        '1. At this time you have no internet access',
        '2. At this time the server cannot answer your request',
        'Please try again later, and if the problem persist try to communicate directly to: danielsosa.dev@gmail.com',
        'Thank you.'
      ],
      type: 'error'
    }
  }
}
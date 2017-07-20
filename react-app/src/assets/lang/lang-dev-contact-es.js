export default {
  title: "Contáctame",
  phone: {
    title: "Llamada telefónica",
    subtitle: "(+598) 99 636 065",
    icon: "contact/phone_logo_128.jpg",
    icon_alt: "Icono de teléfono",
    color_theme: "#5667bf"
  },
  mail: {
    title: "Correo electrónico",
    subtitle: "danielsosa.dev@gmail.com",
    icon: "contact/email_logo_128.jpg",
    icon_alt: "Icono de correo electrónico",
    color_theme: "#54bfa1",
    labels: {
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Mensaje"
    },
    placeholders: {
      name: "Tyler Durden",
      email: "tyler@tfc.com",
      phone: "(+598) 99 000 111 | 099000111",
      message: "Dime qué puedo hacer por ti :)"
    }
  },
  message: {
    success: {
      title: "Éxito!",
      subtitle: "Tu mensaje ha sido enviado",
      body: [
        'Gracias por escribirme, a la brevedad me pondré en contanto contigo.'
      ],
      type: ''
    }
  },
  alert: {
    validation: {
      title: "Datos no válidos",
      subtitle: "Revisa los datos ingresados",
      body: [
        'Nombre: debes escribir tu nombre, este campo es obligatorio.',
        'Email: debes ingresar una dirección de correo válida, este campo es obligatorio.',
        'Teléfono: debes ingresar un número de teléfono válido, este campo es obligatorio.',
        'Mensaje: debes escribir tu mensaje, este campo es obligatorio.'
      ],
      type: 'alert'
    },
    captcha: {
      title: "Error en reCAPTCHA",
      subtitle: "Por favor completa el captcha",
      body: [
        'Debes completar el desafío presentado en el widget de reCAPTCHA.',
        'Deberías poder ver el widget debajo del formulario de contacto.',
        'Inténtalo más tarde y si el problema persiste intenta comunicarte directamente a la dirección: danielsosa.dev@gmail.com',
        'Muchas gracias.'
      ],
      type: 'alert'
    }
  },
  error: {
    conection: {
      title: "Error",
      subtitle: "Tu mensaje no se ha enviado",
      body: [
        'Ah ocurrido uno de los siguientes problemas:',
        '1. No tienes conexión a internet en este momento.',
        '2. El servidor no puede responder en este momento.',
        'Inténtalo más tarde y si el problema persiste intenta comunicarte directamente a la dirección: danielsosa.dev@gmail.com',
        'Muchas gracias.'
      ],
      type: 'error'
    }
  }
}
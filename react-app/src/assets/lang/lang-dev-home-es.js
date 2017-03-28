export default {
  title: "Bienvenid@!",
  header_1: {
    title: 'Daniel Sosa Cardozo',
    subtitle: "Desarrollador de software",
    avatar: "avatar.jpg"    
  },
  header_2: {
    title: 'Lalal',
    subtitle: "Breve descripción",
    avatar: "ds_logo_96.png"    
  },
  h2titles: [
    "Qué y para qué",
    "Tecnologías utilizadas",
  ],
  paragraph_1: "El propósito de esta página es presentar lo que me gusta hacer, y nace de la necesidad de poder mostrar mi trabajo y aptitudes más alla de mi formación académica. Se trata de un compendio de actividades y proyectos relacionadas únicamente con el desarrollo de software. Para ver otros puedes consultar las secciones <a href='/arq'>Arq</a> e <a href='/img'>Img</a> de esta página. Todo el código de esta página está disponible bajo licencia MIT en GitHub, para consulta y uso de quien así lo quiera. Para llegar al mismo puedes hacerlo a través de mi perfil de Github (arriba), o directamente haciendo click <a target='_blank' href='https://github.com/danieluy/www.danielsosa.uy'>aquí.</a>",
  techs: [
    {
      icon: {
        src: "html5_icon.png",
        alt: "Icono HTML5"
      },
      title: {
        href: "https://es.wikipedia.org/wiki/HTML5",
        text: "HTML5"
      },
      p: "Estructuración de la página y articulación de las demás tecnologías involucradas."
    },
    {
      icon: {
        src: "javascript_icon.png",
        alt: "Icono Javascript"
      },
      title: {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        text: "JavaScript"
      },
      p: "Esta tecnología tiene un doble rol. De cara a los usuarios hace posible la interacción de estos con la página, y por otra parte se encarga de hacer funcionar el servidor que alimenta la página."
    },
    {
      icon: {
        src: "css3_icon.png",
        alt: "Icono CSS3"
      },
      title: {
        href: "https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada",
        text: "CSS3"
      },
      p: "Definición y aplición de los estilos y animaciones que enriquecen la interacción de los usuarios con la página."
    },
    {
      icon: {
        src: "nodejs_icon.png",
        alt: "Icono Node.js"
      },
      title: {
        href: "https://nodejs.org/es/",
        text: "Node.js"
      },
      p: "Entorno de ejecución utilizado en el servidor de esta página. Este es el que permite que se utilize JavaScript para esta tarea."
    },
    {
      icon: {
        src: "express_icon.png",
        alt: "Icono Express"
      },
      title: {
        href: "http://expressjs.com/es/",
        text: "Express"
      },
      p: "Facilita manejo de la infraestructura del lado servidor en Node.js."
    },
    {
      icon: {
        src: "react_icon.png",
        alt: "Icono React"
      },
      title: {
        href: "https://facebook.github.io/react/",
        text: "React"
      },
      p: "Una librería Javascript para construir interfaces de usuario."
    },
    // {
    //   icon: {
    //     src: "mustache_icon.png",
    //     alt: "Icono Mustache.js"
    //   },
    //   title: {
    //     href: "https://mustache.github.io/",
    //     text: "{{ Mustache.js }}"
    //   },
    //   p: "Manejo de plantillas HTML con JavaScript. En esta página se utiliza en la interfaz de usuario mayormente para el cambio de idioma."
    // },
    {
      icon: {
        src: "webpack_icon.png",
        alt: "Icono Webpack"
      },
      title: {
        href: "https://webpack.js.org/",
        text: "Webpack"
      },
      p: "Empaquetamiento y minificación de archivos JavaScript, CSS y otros recursos para optimizar la carga de los mismos. En el caso de esta página es utilizado desde los scripts de React."
    }
  ]
}
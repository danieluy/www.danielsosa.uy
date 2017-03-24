const es = {
  title: "Bienvenid@!",
  subtitle: "Desarrollador de software",
  h2titles: [
    "Qué y para qué",
    "Tecnologías utilizadas"
  ],
  paragraphs: [
    "El propósito de esta página es presentar lo que me gusta hacer, y nace de la necesidad de poder mostrar mi trabajo y aptitudes más alla de mi formación académica.",
    "Se trata de un compendio de actividades y proyectos relacionadas únicamente con el desarrollo de software. Para ver otros puedes consultar las secciones <a href='/arq'>Arq</a> e <a href='/img'>Img</a> de esta página.",
    "Todo el código de esta página está disponible bajo licencia MIT en GitHub, para consulta y uso de quien así lo quiera. Para llegar al mismo puedes hacerlo a través de mi perfil de Github (arriba), o directamente haciendo click <a target='_blank' href='https://github.com/danieluy/www.danielsosa.uy'>aquí.</a>"
  ],
  techs: [
    {
      icon: {
        src: "img/html5_icon.png",
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
        src: "img/javascript_icon.png",
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
        src: "img/css3_icon.png",
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
        src: "img/nodejs_icon.png",
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
        src: "img/express_icon.png",
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
        src: "img/mustache_icon.png",
        alt: "Icono Mustache.js"
      },
      title: {
        href: "https://mustache.github.io/",
        text: "{{ Mustache.js }}"
      },
      p: "Manejo de plantillas HTML con JavaScript. En esta página se utiliza en la interfaz de usuario mayormente para el cambio de idioma."
    },
    {
      icon: {
        src: "img/webpack_icon.png",
        alt: "Icono Webpack"
      },
      title: {
        href: "https://webpack.js.org/",
        text: "Webpack"
      },
      p: "Empaquetamiento y minificación de archivos JavaScript y CSS para optimizar la carga de estos recursos."
    }
  ]
}
const en = {
  title: "Welcome!",
  subtitle: "Software developer",
  h2titles: [
    "What and why",
    "Used technologies"
  ],
  paragraphs: [
    "The purpose of this site is to present what I like to do, and it was created out of the necessity of showing of my work and my aptitudes since they fall out of what my academic formation demonstrates.",
    "It's a compendium of activities and projects solely related to software development. You can check other stuff on the sections <a href='/arq'>Arq</a> and <a href='/img'>Img</a> of this site.",
    "The source code of this site is open source and its freely available on Github under the MIT license. You can get it through my GitHub profile (on top), or you can go directly clicking <a target='_blank' href='https://github.com/danieluy/www.danielsosa.uy'>here.</a>"
  ],
  techs: [
    {
      icon: {
        src: "img/html5_icon.png",
        alt: "HTML5 icon"
      },
      title: {
        href: "https://en.wikipedia.org/wiki/HTML5",
        text: "HTML5"
      },
      p: "Page structuring and articulation of the other technologies involved."
    },
    {
      icon: {
        src: "img/javascript_icon.png",
        alt: "Javascript icon"
      },
      title: {
        href: "https://en.wikipedia.org/wiki/JavaScript",
        text: "JavaScript"
      },
      p: "This technology has a double role. In the user interface it makes possible the interaction of the users with the page, on the other hand it is in charge of running the server that serves the page."
    },
    {
      icon: {
        src: "img/css3_icon.png",
        alt: "CSS3 icon"
      },
      title: {
        href: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
        text: "CSS3"
      },
      p: "Defines and applies the styles and animations that enrich the interaction of users with the site."
    },
    {
      icon: {
        src: "img/nodejs_icon.png",
        alt: "Node.js icon"
      },
      title: {
        href: "https://nodejs.org/en/",
        text: "Node.js"
      },
      p: "Runtime used on the server of this page. This is the technology that allows JavaScript to be used as a server side language."
    },
    {
      icon: {
        src: "img/express_icon.png",
        alt: "Express icon"
      },
      title: {
        href: "http://expressjs.com/",
        text: "Express"
      },
      p: "Facilitates server-side infrastructure management in Node.js."
    },
    {
      icon: {
        src: "img/mustache_icon.png",
        alt: "Mustache.js icon"
      },
      title: {
        href: "https://mustache.github.io/",
        text: "{{ Mustache.js }}"
      },
      p: "Handling of HTML templates with JavaScript. In this site it is used in the user interface mostly for language toggling."
    },
    {
      icon: {
        src: "img/webpack_icon.png",
        alt: "Webpack icon"
      },
      title: {
        href: "https://webpack.js.org/",
        text: "Webpack"
      },
      p: "Bundling and minification of JavaScript and CSS files to optimize the resource loading."
    }
  ]
}
export { es, en }
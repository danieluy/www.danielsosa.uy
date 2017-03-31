import techs from './techs';

export default {
  title: "Bienvenid@!",
  header_1: {
    title: 'Daniel Sosa Cardozo',
    subtitle: "Desarrollador de software",
    avatar: "home/avatar.jpg"    
  },
  header_2: {
    title: 'Lalal',
    subtitle: "Breve descripción",
    avatar: "home/ds_logo_96.png"    
  },
  h2titles: [
    "Qué y para qué",
    "Tecnologías utilizadas",
  ],
  paragraph_1: "El propósito de esta página es presentar lo que me gusta hacer, y nace de la necesidad de poder mostrar mi trabajo y aptitudes más alla de mi formación académica. Se trata de un compendio de actividades y proyectos relacionadas únicamente con el desarrollo de software. Para ver otros puedes consultar las secciones <a href='/arq'>Arq</a> e <a href='/img'>Img</a> de esta página. Todo el código de esta página está disponible bajo licencia MIT en GitHub, para consulta y uso de quien así lo quiera. Para llegar al mismo puedes hacerlo a través de mi perfil de Github (arriba), o directamente haciendo click <a target='_blank' href='https://github.com/danieluy/www.danielsosa.uy'>aquí.</a>",
  techs: techs(["HTML5", "JavaScript", "CSS3", "Node.js", "Express", "React", "Webpack"], 'ES')
}
import techs from './techs';

export default {
  title: "Mi trabajo",
  freelance: {
    logo_alt: "Icono de trabajo independiente",
    logo_src: "work/freelance_128.jpg",
    header_title: "Trabajo Independiente",
    header_subtitle: "Ejemplos de trabajos independientes.",
    theme_color: "#c05454",
    works: {
      labels: {
        title: "Título",
        description: "Descripción",
        client_name: "Cliente",
        status: "Estado",
        technologies: "Tecnologías"
      },
      prizes_management: {
        title: "Premios Radiocero",
        year: 2016,
        status: 'Producción',
        description: "Sistema de gestión de premios a la audiencia",
        client_name: "Radiocero 104.3 FM",
        client_href: "http://www.radiocero.com.uy/",
        images: [
          { src: "img/work/radiocero/radiocero_premios_home.jpg", alt: "Radiocero, pagina de inicio" },
          { src: "img/work/radiocero/radiocero_premios_winners_list.jpg", alt: "Radiocero, listado de ganadores" },
          { src: "img/work/radiocero/radiocero_premios_prizes_list.jpg", alt: "Radiocero, listado de premios" },
          { src: "img/work/radiocero/radiocero_premios_prizes_list_open.jpg", alt: "Radiocero, listado de premios, elemento abierto" },
          { src: "img/work/radiocero/radiocero_premios_users_list.jpg", alt: "Radiocero, listado de usuarios" },
          { src: "img/work/radiocero/radiocero_premios_users_new.jpg", alt: "Radiocero, formulario para nuevo usuario" }
        ],
        techs: techs(["HTML5", "JavaScript" , "CSS3" , "Node.js" , "Express" , "Angular" , "MongoDB"], 'ES')
      },
      mtec: {
        title: "Mtec (placeholder)",
        year: 2016,
        status: 'Desarrollo',
        description: "Sitio Corporativo para la empresa Mtec",
        client_name: "Manuel Sosa",
        client_href: "http://www.mtec.com.uy/",
        images: [
          { src: "img/work/mtec/mtec_desktop.jpg", alt: "Mtec, versión de escritorio" },
          { src: "img/work/mtec/mtec_mobile.jpg", alt: "Mtec, versión movil" },
          { src: "img/work/mtec/mtec_dev_clients_desktop.jpg", alt: "Mtec, clientes versión de escritorio" },
          { src: "img/work/mtec/mtec_dev_clients_tablet.jpg", alt: "Mtec, clientes versión de tablets" },
          { src: "img/work/mtec/mtec_dev_clients_phone.jpg", alt: "Mtec, clientes versión de teléfonos" },
          { src: "img/work/mtec/mtec_dev_clients_phone_open_menu.jpg", alt: "Mtec, clientes versión de teléfonos con menú abierto" },
          { src: "img/work/mtec/mtec_dev_hardware_desktop.jpg", alt: "Mtec, equipos versión de escritorio" },
          { src: "img/work/mtec/mtec_dev_hardware_phone.jpg", alt: "Mtec, equipos versión de teléfonos" }
        ],
        techs: techs(["HTML5" , "JavaScript" , "CSS3" , "Node.js" , "Express" , "React"], 'ES')
      }
    }
  },
  employed: {
    logo_alt: "Icono de trabajo dependiente",
    logo_src: "work/employed_128.jpg",
    header_title: "Trabajo Dependiente",
    header_subtitle: "Aún estoy en busca de un trabajo para listar aquí ;-)",
    theme_color: "#a553bf",
    works: []
  }
}
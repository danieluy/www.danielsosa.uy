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
        status: "Estado"
      },
      prizes_management: {
        title: "Premios Radiocero",
        year: 2016,
        status: 'En producción',
        description: "Sistema de gestión de premios a la audiencia",
        client_name: "Radiocero 104.3 FM",
        client_href: "http://www.radiocero.com.uy/",
        images: [
          { src: "radiocero/radiocero_premios_home.jpg", alt: "Radiocero, pagina de inicio" },
          { src: "radiocero/radiocero_premios_winners_list.jpg", alt: "Radiocero, listado de ganadores" },
          { src: "radiocero/radiocero_premios_prizes_list.jpg", alt: "Radiocero, listado de premios" },
          { src: "radiocero/radiocero_premios_prizes_list_open.jpg", alt: "Radiocero, listado de premios, elemento abierto" },
          { src: "radiocero/radiocero_premios_users_list.jpg", alt: "Radiocero, listado de usuarios" },
          { src: "radiocero/radiocero_premios_users_new.jpg", alt: "Radiocero, formulario para nuevo usuario" }
        ],
        techs: []
      },
      mtec: {
        title: "Mtec (placeholder)",
        year: 2016,
        status: 'En desarrollo',
        description: "Sitio Corporativo para la empresa Mtec",
        client_name: "Manuel Sosa",
        client_href: "http://www.mtec.com.uy/",
        cover: { src: "mtec/mtec_desktop.jpg", alt: "Imagen de cabecera" },
        images: [
          { src: "mtec/mtec_desktop.jpg", alt: "Mtec versión de escritorio" },
          { src: "mtec/mtec_mobile.jpg", alt: "Mtec versión movil" }
        ],
        techs: []
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
export default {
  title: "My work",
  freelance: {
    logo_alt: "Freelance icon",
    header_title: "Freelance",
    header_subtitle: "Freelance jobs still under development ",
    works: {
      labels: {
        title: "Title",
        description: "Description",
        client_name: "Client"
      },
      prizes_management: {
        title: "Premios Radiocero",
        year: 2016,
        description: "Audience prizes management system",
        client_name: "Radiocero 104.3 FM",
        client_href: "http://www.radiocero.com.uy/",
        cover: { src: "img/radiocero_premios_lista.jpg", alt: "Imagen de cabecera" },
        images: [
          { src: "img/radiocero_premios_lista.jpg", alt: "Radiocero, prizes list" },
          { src: "img/radiocero_premios_nuevo.jpg", alt: "Radiocero, new prize form" },
          { src: "img/radiocero_usuarios_lista.jpg", alt: "Radiocero, users list" }
        ]
      },
      mtec: {
        title: "Mtec (placeholder)",
        year: 2016,
        description: "Mtec's corporate website",
        client_name: "Manuel Sosa",
        client_href: "http://www.mtec.com.uy/",
        cover: { src: "img/mtec_desktop.jpg", alt: "Cover image" },
        images: [
          { src: "img/mtec_desktop.jpg", alt: "Mtec desktop version" },
          { src: "img/mtec_mobile.jpg", alt: "Mtec mobile version" }
        ]
      }
    }
  },
  employed: {
    logo_alt: "Hired work icon",
    header_title: "Hired Work",
    header_subtitle: "I'm still searching for a job to list here ;-)",
    works: []
  }
}
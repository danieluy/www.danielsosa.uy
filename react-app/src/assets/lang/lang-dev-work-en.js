export default {
  title: "My work",
  freelance: {
    logo_alt: "Freelance icon",
    logo_src: "work/freelance_128.jpg",
    header_title: "Freelance",
    header_subtitle: "Freelance jobs still under development ",
    theme_color: "#c05454",
    works: {
      labels: {
        title: "Title",
        description: "Description",
        client_name: "Client",
        status: "Status"
      },
      prizes_management: {
        title: "Premios Radiocero",
        year: 2016,
        status: 'On production',
        description: "Audience prizes management system",
        client_name: "Radiocero 104.3 FM",
        client_href: "http://www.radiocero.com.uy/",
        images: [
          { src: "radiocero/radiocero_premios_home.jpg", alt: "Radiocero, home page" },
          { src: "radiocero/radiocero_premios_winners_list.jpg", alt: "Radiocero, winners list" },
          { src: "radiocero/radiocero_premios_prizes_list.jpg", alt: "Radiocero, prizes list" },
          { src: "radiocero/radiocero_premios_prizes_list_open.jpg", alt: "Radiocero, prizes list, open element" },
          { src: "radiocero/radiocero_premios_users_list.jpg", alt: "Radiocero, users list" },
          { src: "radiocero/radiocero_premios_users_new.jpg", alt: "Radiocero, new user form" }
        ]
      },
      mtec: {
        title: "Mtec (placeholder)",
        year: 2016,
        status: 'Under development',
        description: "Mtec's corporate website",
        client_name: "Manuel Sosa",
        client_href: "http://www.mtec.com.uy/",
        cover: { src: "mtec_desktop.jpg", alt: "Cover image" },
        images: [
          { src: "mtec_desktop.jpg", alt: "Mtec desktop version" },
          { src: "mtec_mobile.jpg", alt: "Mtec mobile version" }
        ]
      }
    }
  },
  employed: {
    logo_alt: "Hired work icon",
    logo_src: "work/employed_128.jpg",
    header_title: "Hired Work",
    header_subtitle: "I'm still searching for a job to list here ;-)",
    theme_color: "#a553bf",
    works: []
  }
}
import techs from './techs';

export default {
  title: "My work",
  freelance: {
    logo_alt: "Freelance icon",
    logo_src: "work/freelance_128.jpg",
    header_title: "Freelance",
    header_subtitle: "Freelance jobs",
    theme_color: "#c05454",
    works: {
      labels: {
        title: "Title",
        description: "Description",
        client_name: "Client",
        status: "Status",
        technologies: "Technologies"
      },
      prizes_management: {
        title: "Premios Radiocero",
        year: 2016,
        status: 'Production',
        description: "Audience prizes management system",
        client_name: "Radiocero 104.3 FM",
        client_href: "http://www.radiocero.com.uy/",
        images: [
          { src: "img/radiocero/radiocero_premios_home.jpg", alt: "Radiocero, home page" },
          { src: "img/radiocero/radiocero_premios_winners_list.jpg", alt: "Radiocero, winners list" },
          { src: "img/radiocero/radiocero_premios_prizes_list.jpg", alt: "Radiocero, prizes list" },
          { src: "img/radiocero/radiocero_premios_prizes_list_open.jpg", alt: "Radiocero, prizes list, open element" },
          { src: "img/radiocero/radiocero_premios_users_list.jpg", alt: "Radiocero, users list" },
          { src: "img/radiocero/radiocero_premios_users_new.jpg", alt: "Radiocero, new user form" }
        ],
        techs: techs(["HTML5" , "JavaScript" , "CSS3" , "Node.js" , "Express" , "Angular" , "MongoDB"], 'EN')
      },
      mtec: {
        title: "Mtec (placeholder)",
        year: 2016,
        status: 'Development',
        description: "Mtec's corporate website",
        client_name: "Manuel Sosa",
        client_href: "http://www.mtec.com.uy/",
        images: [
          { src: "img/mtec/mtec_desktop.jpg", alt: "Mtec, desktop version" },
          { src: "img/mtec/mtec_mobile.jpg", alt: "Mtec, mobile version" },
          { src: "img/mtec/mtec_dev_clients_desktop.jpg", alt: "Mtec, clients desktop version" },
          { src: "img/mtec/mtec_dev_clients_tablet.jpg", alt: "Mtec, clients tablets version" },
          { src: "img/mtec/mtec_dev_clients_phone.jpg", alt: "Mtec, clients phone version" },
          { src: "img/mtec/mtec_dev_clients_phone_open_menu.jpg", alt: "Mtec, clients phone version with open menu" },
          { src: "img/mtec/mtec_dev_hardware_desktop.jpg", alt: "Mtec, hardware desktop version" },
          { src: "img/mtec/mtec_dev_hardware_phone.jpg", alt: "Mtec, hardware phone version" }
        ],
        techs: techs(["HTML5" , "JavaScript" , "CSS3" , "Node.js" , "Express" , "React"], 'EN')
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
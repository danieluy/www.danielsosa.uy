import { proficiency_items, language_items, anchors } from './lang-arq-common';

export default {
  nav: {
    title: 'Architecture'
  },
  education: {
    header_title: 'Education',
    anchor: anchors.education,
    title: 'Architecture University (FARQ, UDELAR), G’04.',
    subtitle: 'All Workshop Courses Approved.',
    status: 'Ongoing since 2014, currently on hold.'
  },
  achievements: {
    title: 'Achievements',
    anchor: anchors.achievements,
    items: [
      {
        title: 'Housing Competition',
        subtitle: '3rth Prize',
        institution: '"Arquitectura Rifa Generación 2007". With architect Felipe Vázquez.',
        date: '2012'
      },
      {
        title: 'Sculpture contest in Homage to the Disappeared Detainees of Latin America.',
        subtitle: 'First Honorable Mention',
        institution: "Montevideo's Municipality and Association of Mothers and Relatives of Detainees Disappeared. With the architects Esteban Varela and Martín Delgado.",
        date: '2009'
      },
      {
        title: 'Architectural Contest for the New Conaprole Administrative Complex.',
        subtitle: 'Honorable Mention',
        institution: 'Collaborator with mu!!! Architectural Office and Cubo Arquitectura.',
        date: '2008'
      }
    ]
  },
  work_history: {
    title: 'Work history',
    anchor: anchors.workHistory,
    items: [
      {
        title: 'LAND Architectural Office, of architect Andrés Nogués.',
        subtitle: 'Third-Year Intern',
        paragraphs: [
          'Executive project for a single-family house for the Queirolo Bonner family in Barra de Carrasco, Montevideo.'
        ],
        year: 2013,
        to: null
      },
      {
        title: 'ACM Architectural Office, of architect José Manggiarotti and Partners.',
        subtitle: 'Third-Year Intern',
        paragraphs: [
          'Survey, pathologies diagnosis, executive projects and building permissions for the  Fire Departament permission for the "Support Plan for Corrective Maintenance of Educational Buildings, Public Educational Infrastructure Trust." ANEP - CND ".',
          'Support in visualization and design for a social interest housing project in Las Piedras, Canelones.'
        ],
        year: 2012,
        to: 2013
      },
      {
        title: '[re] Architectural Office, of architects Esteban Varela and Martín Delgado.',
        subtitle: 'Second-Year Intern',
        paragraphs: [
          'Development of holiday home complex "Paracas Shamrok Lagoon" in Paracas, Ica, Peru. Design of typologies, morphological studies, design of parks and recreational areas, confection of 3D models and rendering for studies of the whole complex and single typologies.',
          'Trip to Lima, Peru as coordinator at 51-1 Architecture Office (Feb. 2012 to Apr. 2012). Support in visualization of the remodeling project for a school district of Callao, and a contest for a housing building in the District of Ancón, Lima.'
        ],
        year: 2011,
        to: 2012
      },
      {
        title: 'eDL s.a. Architectural Office.',
        subtitle: 'Second-Year Intern',
        paragraphs: [
          'Preliminary projects development, executive projects and construction permissions. Head of graphics office, confection of 3D models and rendering for morphological and of urban insertion studies, support in interior design.'
        ],
        year: 2010,
        to: 2011
      },
      {
        title: "Arqchitect Juan Fabini's Architectural Office.",
        subtitle: 'Entry-Level Intern',
        paragraphs: [],
        year: 2008,
        to: 2010
      }
    ]
  },
  proficiency: {
    title: 'Software proficiency',
    anchor: anchors.softwareProficiency,
    items: proficiency_items
  },
  languages: {
    title: 'Languages proficiency',
    anchor: anchors.proficiencyLanguages,
    items: language_items
  }
}
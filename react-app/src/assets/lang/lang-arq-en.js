import { proficiency_items, language_items } from './lang-arq-common';

export default {
  nav: {
    title: 'Architecture'
  },
  education: {
    header_title: 'Education',
    anchor: 'education',
    title: 'Architecture University (FARQ, UDELAR), G’04.',
    subtitle: '6th grade Workshop approved.',
    status: 'Ongoing since 2014, currently on hold.'
  },
  achievements: {
    title: 'Achievements',
    anchor: 'achievements',
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
    anchor: 'work_history',
    items: [
      {
        title: 'LAND Architectural Office, of architect Andrés Nogués.',
        subtitle: 'Third-Year Intern',
        paragraphs: [
          'Elaboración de proyecto ejecutivo para vivienda unifamiliar perteneciente a la familia Queirolo Bonner en Barra de Carrasco, Montevideo.'
        ],
        year: 2013,
        to: null
      },
      {
        title: 'ACM Architectural Office, of architect José Manggiarotti and Partners.',
        subtitle: 'Third-Year Intern',
        paragraphs: [
          'Elaboración de relevamiento, diagnóstico de patologías, proyectos ejecutivos y permisos de habilitación de bomberos para el "Plan de Apoyo al Mantenimiento Correctivo de Edificios Educativos, Fideicomiso de Infraestructura Educativa Pública. ANEP – CND".',
          'Apoyo en visualización y diseño para un proyecto de vivienda de interés social en Las Piedras, Canelones.'
        ],
        year: 2012,
        to: 2013
      },
      {
        title: '[re] Architectural Office, of architects Esteban Varela and Martín Delgado.',
        subtitle: 'Third-Year Intern',
        paragraphs: [
          'Desarrollo de conjunto de vivienda de veraneo "Paracas Shamrok Lagoon" en Paracas, Ica, Perú. Desarrollo de tipologías, estudios morfológicos, diseño de parques y zonas recreativas, realización de modelos tridimensionales y renderizados para estudios de conjunto y tipologías.',
          'Viaje a Lima, Perú como coordinador en 51-1 Architectural Office (Feb. 2012 a Abr. 2012). Apoyo en visualización del proyecto de remodelación para un colegio Distrito  de Callao, y para concurso de vivienda en altura en el Distrito de Ancón, Lima.'
        ],
        year: 2011,
        to: 2012
      },
      {
        title: 'eDL s.a. Architectural Office.',
        subtitle: 'Second-Year Intern',
        paragraphs: [
          'Desarrollo de anteproyectos, proyectos ejecutivos y permisos de construcción. Encargado de oficina de Gráficos, realización de modelos tridimensionales y renderizados para estudios morfológicos y de inserción urbana, apoyo en el diseño de interiores.'
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
    anchor: 'proficiency_software',
    items: proficiency_items
  },
  languages: {
    title: 'Languages proficiency',
    anchor: 'proficiency_languages',
    items: language_items
  }
}
import { proficiency_items, language_items } from './lang-arq-common';

export default {
  nav: {
    title: 'Arquitectura'
  },
  education: {
    header_title: 'Educación',
    anchor: 'education',
    title: 'Facultad de Arquitectura (FARQ, UDELAR), G’04.',
    subtitle: 'Anteproyecto 5 aprobado.',
    status: 'En curso desde 2014, actualmente puesta en espera.'
  },
  achievements: {
    title: 'Logros',
    anchor: 'achievements',
    items: [
      {
        title: 'Concurso de Vivienda',
        subtitle: 'Tercer Premio',
        institution: 'Arquitectura Rifa Generación 2007. Con el Arq. Felipe Vázquez.',
        date: '2012'
      },
      {
        title: 'Concurso de una Obra Escultórica en Homenaje a los Detenidos Desaparecidos de América Latina.',
        subtitle: 'Primera Mención',
        institution: 'Intendencia Municipal de Montevideo y Asociación de Madres y Familiares de Detenidos Desaparecidos. Con los arquitectos Esteban Varela y Martín Delgado.',
        date: '2009'
      },
      {
        title: 'Concurso de Arquitectura para el Nuevo Complejo Administrativo de Conaprole.',
        subtitle: 'Mención',
        institution: 'Colaborador con Estudio mu!!! y Cubo Arquitectura.',
        date: '2008'
      }
    ]
  },
  work_history: {
    title: 'Historia Laboral',
    anchor: 'work_history',
    items: [
      {
        title: 'LAND Estudio de Arquitectura, del Arq. Andrés Nogués.',
        subtitle: 'Ayudante de Arquitecto.',
        paragraphs: [
          'Elaboración de proyecto ejecutivo para vivienda unifamiliar perteneciente a la familia Queirolo Bonner en Barra de Carrasco, Montevideo.'
        ],
        year: 2013,
        to: null
      },
      {
        title: 'ACM Estudio de Arquitectura, del Arq. José Manggiarotti y asociados.',
        subtitle: 'Ayudante de Arquitecto.',
        paragraphs: [
          'Elaboración de relevamiento, diagnóstico de patologías, proyectos ejecutivos y permisos de habilitación de bomberos para el "Plan de Apoyo al Mantenimiento Correctivo de Edificios Educativos, Fideicomiso de Infraestructura Educativa Pública. ANEP – CND".',
          'Apoyo en visualización y diseño para un proyecto de vivienda de interés social en Las Piedras, Canelones.'
        ],
        year: 2012,
        to: 2013
      },
      {
        title: '[re] Estudio de Arquitectura, Arq. Esteban Varela y Arq. Martín Delgado.',
        subtitle: 'Ayudante de Arquitecto.',
        paragraphs: [
          'Desarrollo de conjunto de vivienda de veraneo "Paracas Shamrok Lagoon" en Paracas, Ica, Perú. Desarrollo de tipologías, estudios morfológicos, diseño de parques y zonas recreativas, realización de modelos tridimensionales y renderizados para estudios de conjunto y tipologías.',
          'Viaje a Lima, Perú como coordinador en 51-1 Estudio de Arquitectura (Feb. 2012 a Abr. 2012). Apoyo en visualización del proyecto de remodelación para un colegio Distrito  de Callao, y para concurso de vivienda en altura en el Distrito de Ancón, Lima.'
        ],
        year: 2011,
        to: 2012
      },
      {
        title: 'eDL s.a. Estudio de Arquitectura.',
        subtitle: 'Ayudante de Arquitecto.',
        paragraphs: [
          'Desarrollo de anteproyectos, proyectos ejecutivos y permisos de construcción. Encargado de oficina de Gráficos, realización de modelos tridimensionales y renderizados para estudios morfológicos y de inserción urbana, apoyo en el diseño de interiores.'
        ],
        year: 2010,
        to: 2011
      },
      {
        title: 'Estudio del Arq. Juan Fabini.',
        subtitle: 'Dibujante',
        paragraphs: [],
        year: 2008,
        to: 2010
      }
    ]
  },
  proficiency: {
    title: 'Competencia en Software',
    anchor: 'proficiency_software',
    items: proficiency_items
  },
  languages: {
    title: 'Competencia en Ldiomas',
    anchor: 'proficiency_languages',
    items: language_items
  }
}
import {
  emoticon,
  vivienda2013,
  proyectoET,
  CentroJusticiaMaldonado
} from './lang-img-common';

export default {
  title: "Renders by Daniel Sosa",
  projects: [
    {
      title: "Emoticon",
      renders: emoticon.renders,
      paragraphs: [
        'Render: Daniel Sosa',
        'Modelo de extractor de aire pintado como emoticon',
        'Realizado como estudio de técnicas de modelado, iluminación, texturizado y posproducción.'
      ],
      year: 2013
    },
    {
      title: "Vivienda 2013",
      renders: vivienda2013.renders,
      paragraphs: [
        'Render: Daniel Sosa',
        'Proyecto: Felipe Vázquez, Daniel Sosa.',
        'Imagen realizada para el Concurso de Vivienda, organizado por Grupo de Viaje Gen. 2008, de Facultad de Arquitectura de Uruguay (Farq-UdelaR).'
      ],
      year: 2013
    },
    {
      title: "Proyecto E.T.",
      renders: proyectoET.renders,
      paragraphs: [
        'Render: Daniel Sosa',
        'Imagen encargada para el proyecto Escuela de Talentos en el distrito de Callao en Lima, Perú.'
      ],
      year: 2012
    },
    {
      title: "Centro de Justicia de Maldonado",
      renders: CentroJusticiaMaldonado.renders,
      paragraphs: [
        'Render: Daniel Sosa',
        'Anteproyecto: Poder Judicial',
        'Proyecto Ejecutivo: MARQ Rocca-Giménez-Antón.'
      ],
      year: 2013
    }
  ]
}
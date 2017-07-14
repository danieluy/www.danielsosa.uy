import { software_analist } from './lang-dev-academic-mutual';

export default {
  title: "Formación Académica",
  labels: {
    grade: "Nota",
    subject_name: "Materia",
    average: "Prom."
  },
  careers: [
    {
      name: "Analista Programador",
      status: "En curso",
      color_theme: software_analist.color_theme,  
      institution: {
        name: "Universidad ORT Uruguay",
        logo: {
          src: software_analist.institution.logo.src,
          alt: "Logo Uiversidad ORT"
        }
      },
      subjects: [
        { score: "??", name: "Diseño y Desarrollo de Aplicaciones", techs: "POO | Java | UML" },
        { score: 99, name: "Algoritmos y Estructuras de Datos 2", techs: "POO | Java | Arboles | Grafos | Multiestructuras" },
        { score: 93, name: "Ingeniría de software", techs: "Gestión de proyectos de software" }
      ],
      refs: software_analist.refs
    },
    {
      name: "Programador Web",
      status: "Completado",
      color_theme: software_analist.color_theme,
      institution: {
        name: "Universidad ORT Uruguay",
        logo: {
          src: software_analist.institution.logo.src,
          alt: "Logo Uiversidad ORT"
        }
      },
      subjects: [
        { score: 99, name: "Programación 1", techs: "Javascript | jQuery | HTML | CSS" },
        { score: 98, name: "Programación 2", techs: "POO | C# | ASP.NET" },
        { score: 96, name: "Programación 3", techs: "POO | C# | ASP.NET | ADO.NET | Entity Framework | MVC" },
        { score: 96, name: "Algoritmos y Estructuras de Datos 1", techs: "POO | Java | Listas | Colas | Pilas" },
        { score: 93, name: "Bases de Datos 1", techs: "Diseño de bases de datos relacionales | SQL Server" },
        { score: 91, name: "Bases de Datos 2", techs: "Programación SQL | SQL Server" },
        { score: 100, name: "Taller de Tecnologías", techs: "Mobile | HTML | CSS | Javascript | jQuery | jQuery Mobile | PhoneGap" },
        { score: 95, name: "Taller de Usabilidad y Accesibilidad", techs: "HTML | CSS | Bootstrap | Javascript | jQuery" },
        { score: 95, name: "Introducción a la Computación", techs: "Hardware | Windows | Linux | Redes" },
        { score: 89, name: "Taller de Objetos", techs: "Documentación y Diagramas | C# | ASP.NET" }
      ],
      refs: software_analist.refs
    }
  ]
}
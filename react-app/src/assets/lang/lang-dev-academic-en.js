import { software_analist } from './lang-dev-academic-common';

export default {
  title: "Academic Achievements",
  labels: {
    grade: "Score",
    subject_name: "Subject",
    average: "Avg."
  },
  careers: [
    {
      name: "Software Analist",
      status: "Ongoing",
      color_theme: software_analist.color_theme,
      institution: {
        name: "ORT University, Uruguay",
        logo: {
          src: software_analist.institution.logo.src,
          alt: "Logo ORT University"
        }
      },
      subjects: [
        { score: "??", name: "Final Proyect (thesis)", techs: "Javascript | HTML | CSS | Non Relational Databases | Design Patterns | Architecture" },
        { score: 98, name: "GeneXus Workshop", techs: "GeneXus" },
        { score: 90, name: "Applications Design and Development", techs: " | OOP | Java | UML" },
        { score: 99, name: "Algorithms & Data Structures 2", techs: "OOP | Java | Trees | Graphs | Multi-structures" },
        { score: 93, name: "Software Engineering", techs: "Software project management" }
      ],
      refs: software_analist.refs
    },
    {
      name: "Web Developer",
      status: "Completed",
      color_theme: software_analist.color_theme,
      institution: {
        name: "ORT University, Uruguay",
        logo: {
          src: software_analist.institution.logo.src,
          alt: "Logo Uiversidad ORT"
        }
      },
      subjects: [
        { score: 99, name: "Programming 1", techs: "Javascript | jQuery | HTML | CSS" },
        { score: 98, name: "Programming 2", techs: "OOP | C# | ASP.NET" },
        { score: 96, name: "Programming 3", techs: "OOP | C# | ASP.NET | ADO.NET | Entity Framework | MVC" },
        { score: 96, name: "Algorithms & Data Structures 1", techs: "OOP | Java | Lists | Stacks | Queues" },
        { score: 93, name: "Databases 1", techs: "Relational databases design | SQL Server" },
        { score: 91, name: "Databases 2", techs: "SQL Programming | SQL Server" },
        { score: 100, name: "Technologies Workshop", techs: "Mobile | HTML | CSS | Javascript | jQuery | jQuery Mobile | PhoneGap" },
        { score: 95, name: "Usability & Accessibility Workshop", techs: "HTML | CSS | Bootstrap | Javascript | jQuery" },
        { score: 95, name: "Computing Introduction", techs: "Hardware | Windows | Linux | Networking" },
        { score: 89, name: "Objects Workshop", techs: "Documentation and Diagrams | C# | ASP.NET" }
      ],
      refs: software_analist.refs
    }
  ]
}
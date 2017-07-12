import { dsNewTab } from './lang-dev-stuff-mutual';
import techs from './techs';

export default {
  title: "Mis Cosas",
  label:{
    description: 'Descripción',
    license: 'Licencia',
    techs: 'Tenologías'
  },
  stuff: [
    {
      title: dsNewTab.title,
      current_version: dsNewTab.current_version,
      logo: dsNewTab.logo,
      subtitle: `Google Chrome's new tab replacement.`,
      description: 'Nueva pestaña para Google Chrome. Incluye un remplazo para la barra de marcadores sincronizada usando la API bookmarks de Chrome, y un Fondo de Pantalla guardado localmente para mejorar el desempeño. Para futuras versiones están planeados atajos personalizables y más personalización.',
      license: dsNewTab.license,
      gallery: dsNewTab.gallery,
      techs: techs(["HTML5", "JavaScript", "CSS3", "Chrome Extension", "React", "Material-UI", "Webpack"], 'ES')
    }
  ]
}
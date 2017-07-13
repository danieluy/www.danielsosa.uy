import { ds_new_tab, ds_gallery } from './lang-dev-stuff-mutual';
import techs from './techs';

export default {
  title: "Mis Cosas",
  label: {
    description: 'Descripción',
    license: 'Licencia',
    techs: 'Tenologías'
  },
  stuff: [
    {
      title: ds_new_tab.title,
      current_version: ds_new_tab.current_version,
      logo: ds_new_tab.logo,
      subtitle: `Google Chrome's new tab replacement.`,
      description: 'Nueva pestaña para Google Chrome. Incluye un remplazo para la barra de marcadores sincronizada usando la API bookmarks de Chrome, fondo de pantalla guardado localmente para mejorar el desempeño, mosaicos mostrando capturas de los cinco sitios más visitados, y un visor de historial simple.',
      license: ds_new_tab.license,
      gallery: ds_new_tab.gallery,
      techs: techs(["HTML5", "JavaScript", "CSS3", "Chrome Extension", "React", "Material-UI", "Webpack"], 'ES'),
      refs: ds_new_tab.refs
    },
    {
      title: ds_gallery.title,
      current_version: ds_gallery.current_version,
      logo: ds_gallery.logo,
      subtitle: `Componente en React para mostrar imágenes estáticas.`,
      description: 'Sencilla galería que se implementa como componente de React con soporte para swipe. Es la misma que se usa para mostrar imágenes en algunas secciones de este sitio. Encima se puede ver un ejemplo con imágenes de todos tamaños. (Imágenes obtenidas al azar de http://lorempixel.com/)',
      license: ds_gallery.license,
      gallery: ds_gallery.gallery,
      techs: techs(["HTML5", "JavaScript", "CSS3", "React", "Hammer.js", "Webpack"], 'EN'),
      refs: ds_gallery.refs
    }
  ]
}
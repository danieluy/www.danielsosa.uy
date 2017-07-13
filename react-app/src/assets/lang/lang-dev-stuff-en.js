import { ds_new_tab, ds_gallery } from './lang-dev-stuff-mutual';
import techs from './techs';

export default {
  title: "My Stuff",
  label: {
    description: 'Description',
    license: 'License',
    techs: 'Technologies'
  },
  stuff: [
    {
      title: ds_new_tab.title,
      current_version: ds_new_tab.current_version,
      logo: ds_new_tab.logo,
      subtitle: `Remplazo de la nueva pestaña de Google Chrome.`,
      description: 'Configurable new tab for Google Chrome browser. Featuring a Bookmarks bar replacement fully synced using the Chrome bookmarks API, a Wallpaper saved locally for better performance, tiles displaying the top five of the most visited sites with thumbnails, and a simple local history viewer.',
      license: ds_new_tab.license,
      gallery: ds_new_tab.gallery,
      techs: techs(["HTML5", "JavaScript", "CSS3", "Chrome Extension", "React", "Material-UI", "Webpack"], 'EN'),
      refs: ds_new_tab.refs
    },
    {
      title: ds_gallery.title,
      current_version: ds_gallery.current_version,
      logo: ds_gallery.logo,
      subtitle: `React component to display static images.`,
      description: `Simple gallery component for React with swipe support. It's the one used to display the images in some sections of this website. You can check an example above with all kind of images sizes. (Images randomically obtained from http://lorempixel.com/)`,
      license: ds_gallery.license,
      gallery: ds_gallery.gallery,
      techs: techs(["HTML5", "JavaScript", "CSS3", "React", "Hammer.js", "Webpack"], 'EN'),
      refs: ds_gallery.refs
    }
  ]
}
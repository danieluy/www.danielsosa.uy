import { dsNewTab } from './lang-dev-stuff-mutual';
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
      title: dsNewTab.title,
      current_version: dsNewTab.current_version,
      logo: dsNewTab.logo,
      subtitle: `Remplazo de la nueva pestaña de Google Chrome.`,
      description: 'Configurable new tab for Google Chrome browser. Featuring a Bookmarks bar replacement fully synced using the Chrome bookmarks API, and a Wallpaper saved locally for better performance. Future versions will include custom shortcuts and more personalization.',
      license: dsNewTab.license,
      gallery: dsNewTab.gallery,
      techs: techs(["HTML5", "JavaScript", "CSS3", "Chrome Extension", "React", "Material-UI", "Webpack"], 'EN')
    }
  ]
}
import { dsNewTab } from './lang-dev-stuff-mutual';

export default {
  title: "Stuff",
  label:{
    description: 'Description',
    license: 'License'
  },
  stuff: [
    {
      title: dsNewTab.title,
      current_version: dsNewTab.current_version,
      logo: dsNewTab.logo,
      subtitle: `Remplazo de la nueva pestaña de Google Chrome.`,
      description: 'Configurable new tab for Google Chrome browser. Featuring a Bookmarks bar replacement fully synced using the Chrome bookmarks API, and a Wallpaper saved locally for better performance. Future versions will include custom shortcuts and more personalization.',
      license: dsNewTab.license,
      gallery: dsNewTab.gallery
    }
  ]
}
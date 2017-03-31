import ES from './techs-es';
import EN from './techs-en';
export default function(techs, lang){
  const aux = lang === 'ES' ? ES : EN;
  return aux.filter((tech) => techs.indexOf(tech.title.text) > -1)
}
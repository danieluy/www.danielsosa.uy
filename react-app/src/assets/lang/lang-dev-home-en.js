import techs from './techs';

export default {
  title: "Welcome!",
  header_1: {
    title: 'Daniel Sosa Cardozo',
    subtitle: "Software developer",
    avatar: "home/avatar.jpg"
  },
  h2titles: [
    "What and why",
    "Used technologies"
  ],
  paragraph_1: "The purpose of this site is to present what I like to do, and it was created out of the necessity of showing of my work and my aptitudes since they fall out of what my academic formation demonstrates. It's a compendium of activities and projects solely related to software development. You can check other stuff on the sections <a href='/arq'>Arq</a> and <a href='/img'>Img</a> of this site. The source code of this site is open source and its freely available on Github under the MIT license. You can get it through my GitHub profile (on top), or you can go directly clicking <a target='_blank' href='https://github.com/danieluy/www.danielsosa.uy'>here.</a>",
  techs: techs(["HTML5", "JavaScript", "CSS3", "Node.js", "Express", "React", "Webpack"], 'EN')
}
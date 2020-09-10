import { DomSanitizer } from '@angular/platform-browser';
import { TeamMember } from './teamMember';

export class LandingpageComponentModel {
  public headline: string;
  public headerbutton: string[];
  public functionheadline: string;
  public functionvernetzen: string[];
  public functionmatch: string[];
  public functionbelohnen: string[];
  public teamheadline: string;
  public teamdescription: string;
  public teamMembers;
  public teambackground;
  public mitmachenheadline: string;
  public mitmachendescription: string;
  public mitmachenbutton: string;

  constructor(private sanitizer: DomSanitizer) {
    this.headline = 'What\'s your \n' + 'impact?';
    this.headerbutton = ['Zur Anwendung', 'Coming soon'];
    this.functionheadline = 'Wie funktioniert impact?';
    this.functionvernetzen = [
      'Wir vernetzten Dich',
      'impact will Dir die Möglichkeit geben, ' +
        'Dich ohne Druck sozial zu engagieren. Dafür schaffen wir eine Plattform, die ' +
        'Dich mit Hilfesuchenden verbindet und es Dir erleichtert mehr für Andere zu ' +
        'tun. Du findest sowohl als Privatperson, als auch als Organisation jede Hilfe, die Du brauchst. '
    ];
    this.functionmatch = [
      'Du findest Dein Match',
      'Durch verschiedene Filtermöglichkeiten kannst Du ' +
        'unter zahlreichen Suchangeboten verschiedenster Organisationen und Privatpersonen, die für Dich ' +
        'passende Möglichkeit finden, Dich sozial zu engagieren. Dafür verwenden wir unseren Matching-Algorithmus.'
    ];
    this.functionbelohnen = [
      'Wir belohnen Dich',
      'Für Deinen Einsatz belohnen wir Dich mit einem, von unseren ' +
        'strategischen Partnern unterstützten und anerkannten, Zertifikat. Unsere Vision ist es den gesellschaftlichen ' +
        'Zusammenhalt über Krisenzeiten hinaus zu fördern und eine bundesweit einheitliche Plattform mit allen relevanten ' +
        'Akteuren zu schaffen. '
    ];
    this.teamheadline = 'Wer sind wir?';
    this.teamdescription =
      'Wir sind ein wachsendes Team von Studierenden aus Konstanz in den Bereichen ' +
      'Kommunikation, Design, Strategie und IT. Gemeinsam treffen wir uns regelmäßig und bringen die ' +
      'Fortschritte der jeweiligen Bereiche zusammen. Das überaus große Engagement, die fachspezifischen ' +
      'Kenntnisse und Erfahrungen der Teammitglieder, sowie die zielführenden Aktivitäten, lassen uns auf ein ' +
      'zeitnahes Release von impact blicken.';
    this.teamMembers = [
      new TeamMember('Tobias', '../../../assets/images/portraits/Tobi.jpg', '#1b78f2', 'Gründer & Entwicklung'),
      new TeamMember('Fabian', '../../../assets/images/portraits/Fabian.jpg', '#5a13f2', 'Koordination & Produkt'),
      new TeamMember('Julia', '../../../assets/images/portraits/Julia.jpg', '#c004d9', 'Kommunikation'),
      new TeamMember('Michael', '../../../assets/images/portraits/Michael.jpg', '#c004d9', 'Kommunikation & Strategie'),
      new TeamMember('Patrick', '../../../assets/images/portraits/noimage.png', '#5a13f2', 'Kommunikation & Social Media'),
      new TeamMember('Emine', '../../../assets/images/portraits/Emine.jpg', '#c004d9', 'Design'),
      new TeamMember('Ena', '../../../assets/images/portraits/Ena.jpg', '#5a13f2', 'Design'),
      new TeamMember('Florian', '../../../assets/images/portraits/noimage.png', '#5a13f2', 'Recht'),
      new TeamMember('Marino', '../../../assets/images/portraits/noimage.png', '#1b78f2', 'Strategie & Produkt'),
      new TeamMember('Lena', '../../../assets/images/portraits/Lena.jpg', '#c004d9', 'Strategie & Produkt'),
      new TeamMember('Lara', '../../../assets/images/portraits/Lara.jpg', '#1b78f2', 'Social Media'),
      new TeamMember('Paula', '../../../assets/images/portraits/Paula.jpg', '#1b78f2', 'Design'),
      new TeamMember('Nikolai', '../../../assets/images/portraits/Nico.jpg', '#5a13f2', 'Entwicklung'),
      new TeamMember('Lena', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung'),
      new TeamMember('Tilman', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung'),
      new TeamMember('Fabian', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Strategie'),
      new TeamMember('Kevin', '../../../assets/images/portraits/noimage.png', '#1b78f2', 'Entwicklung'),
      new TeamMember('Bastian', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung')
    ];
    this.mitmachenheadline = 'Du möchtest mitmachen?';
    this.mitmachendescription =
      'Du bist von unserem Vorhaben begeistert und möchtest Dich einbringen? Dann werde ' +
      'Teil von impact! Wir freuen uns über jede Unterstützung für unser ambitioniertes Projekt. Ob als „freie*r ' +
      'Mitarbeiter*in“ oder als Mitglied, Du kannst den Bereich und Umfang Deines Engagements selbst bestimmen.';
    this.mitmachenbutton = 'Kontaktiere uns';
  }

  public clone(): LandingpageComponentModel {
    const clonedModel: LandingpageComponentModel = new LandingpageComponentModel(this.sanitizer);
    clonedModel.headerbutton = this.headerbutton;
    clonedModel.headline = this.headline;
    clonedModel.functionbelohnen = this.functionbelohnen;
    clonedModel.functionmatch = this.functionmatch;
    clonedModel.functionvernetzen = this.functionvernetzen;
    clonedModel.functionheadline = this.functionheadline;
    clonedModel.teamdescription = this.teamdescription;
    clonedModel.teamheadline = this.teamheadline;
    clonedModel.teambackground = this.teambackground;
    clonedModel.mitmachenbutton = this.mitmachenbutton;
    clonedModel.mitmachendescription = this.mitmachendescription;
    clonedModel.mitmachenheadline = this.mitmachenheadline;
    clonedModel.teamMembers = this.teamMembers;
    return clonedModel;
  }
}

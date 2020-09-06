import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
    this.functionvernetzen = ['Wir vernetzten dich', 'impact will dir die Möglichkeit geben, ' +
    'dich ohne Druck sozial zu engagieren. Dafür schaffen wir eine Plattform, die ' +
    'dich mit Hilfesuchenden verbindet und es dir erleichtert mehr für Andere zu ' +
    'tun. Du findest sowohl als Privatperson, als auch als Organisation jede Hilfe, die du brauchst. '];
    this.functionmatch = ['Du findest dein Match', 'Durch verschiedene Filtermöglichkeiten kannst du ' +
    'unter zahlreichen Suchangeboten verschiedenster Organisationen und Privatpersonen, die für dich ' +
    'passende Möglichkeit finden, dich sozial zu engagieren. Dafür verwenden wir unseren Matching-Algorithmus.'];
    this.functionbelohnen = ['Wir belohnen dich', 'Für deinen Einsatz belohnen wir dich mit einem von unseren ' +
    'strategischen Partnern unterstützten und anerkannten Zertifikat. Unsere Vision ist es den gesellschaftlichen ' +
    'Zusammenhalt über Krisenzeiten hinaus zu fördern und eine bundesweit einheitliche Plattform mit allen relevanten ' +
    'Akteuren zu schaffen. '];
    this.teamheadline = 'Wer sind wir?';
    this.teamdescription = 'Wir sind ein wachsendes Team von 20 Studierenden aus Konstanz in den Bereichen ' +
      'Kommunikation, Design, Strategie und IT. Gemeinsam treffen wir uns regelmäßig und bringen die ' +
      'Fortschritte der jeweiligen Gruppen zusammen. Das überaus große Engagement, die fachspezifischen ' +
      'Kenntnisse und Erfahrungen der Teammitglieder, sowie die zielführenden Aktivitäten, lassen uns auf ein ' +
      'zeitnahes Release von impact blicken.';
    this.teamMembers = [
      new TeamMember('Tobias', '../../../assets/images/portraits/Tobi.jpg', '#5A22F2', 'IT'),
      new TeamMember('Fabian', '../../../assets/images/portraits/Fabian.jpg', '#5A22F2', 'Koordination'),
      new TeamMember('Emine', '../../../assets/images/portraits/Emine.jpg', '#5A22F2', 'IT'),
      new TeamMember('Ena', '../../../assets/images/portraits/Ena.jpg', '#5A22F2', 'Koordination'),
      new TeamMember('Lena', '../../../assets/images/portraits/Lena.jpg', '#5A22F2', 'IT'),
      new TeamMember('Julia', '../../../assets/images/portraits/Julia.jpg', '#5A22F2', 'Koordination'),
      new TeamMember('Lara', '../../../assets/images/portraits/Lara.jpg', '#5A22F2', 'IT'),
      new TeamMember('Michael', '../../../assets/images/portraits/Michael.jpg', '#5A22F2', 'Koordination'),
      new TeamMember('Paula', '../../../assets/images/portraits/Paula.jpg', '#5A22F2', 'IT'),
      new TeamMember('Lena', '../../../assets/images/portraits/Lena.jpg', '#5A22F2', 'Koordination')
    ];
    this.mitmachenheadline = 'Du möchtest mitmachen?';
    this.mitmachendescription = 'Du bist von unserem Vorhaben begeistert und möchtest dich einbringen? Dann werde ' +
      'Teil von impact! Wir freuen uns über jede Unterstützung für unser ambitioniertes Projekt. Ob als „freie*r ' +
      'Mitarbeiter*in“ oder als Mitglied, du kannst den Bereich und Umfang deines Engagements selbst bestimmen.';
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

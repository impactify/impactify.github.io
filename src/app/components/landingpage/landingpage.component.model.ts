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
  public instaheadline: string;
  public instadescription: string;

  constructor(private sanitizer: DomSanitizer) {
    this.headline = "What's your \n" + 'impact?';
    this.headerbutton = ['Zur Anwendung', 'Coming soon'];
    this.functionheadline = 'Wie funktioniert impact?';
    this.functionvernetzen = [
      'Wir vernetzten Euch',
      'impact will die Hürden, sich gemeinnützig zu engagieren, minimieren: Ihr tut Gutes, wir erledigen den Rest. ' +
        'Dafür schaffen wir eine Plattform, die alle relevanten Akteure zusammenführt, ohne Aufwand und Druck. ' +
        'Ihr findet sowohl als Privatperson, als auch als Organisation, das "passende Gegenüber".'
    ];
    this.functionmatch = [
      'Wir finden Euer Match',
      'Basierend auf Eurem Profil schlagen wir Euch automatisch und spielerisch passende Möglichkeiten vor, Euch einzubringen. ' +
        'Alternativ könnt Ihr Euch manuell mit diversen Filtermöglichkeiten selbst auf die Suche machen.'
    ];
    this.functionbelohnen = [
      'Euer Einsatz wird belohnt',
      'Soziales Engagement verdient Wertschätzung: Dafür haben wir gemeinsam mit unseren strategischen Partnern den ' +
        '"Helferschein" ins Leben gerufen, der als Nachweis Eurer guten Taten dient und Euch perspektivisch bei vielen ' +
        'Gelegenheiten positiv und vorteilhaft angerechnet werden wird.'
    ];
    this.teamheadline = 'Wer sind wir?';
    this.teamdescription =
      'Wir sind ein stetig wachsendes und bunt gemischtes Team von gut 20 Studierenden aus ' +
      'Konstanz & Umgebung, holokratisch organisiert in den Kreisen Koordination, Strategie, Kommunikation, ' +
      'Design und IT. Wir arbeiten teamübergreifend gemeinsam an den anstehenden Aufgaben und synchronisieren uns ' +
      'mindestens alle 2 Wochen in der großen Runde. ' +
      'Mit großem Engagement und Tatendrang sowie sich ergänzender, individueller Fähigkeiten und ' +
      'Erfahrungen kommen wir der Umsetzung unserer Vision stetig näher.';
    this.teamMembers = [
      new TeamMember('Tobias', '../../../assets/images/portraits/Tobi.jpg', '#c004d9', 'Initiator, Entwicklung & Strategie'),
      new TeamMember('Fabian', '../../../assets/images/portraits/Fabian.jpg', '#5a13f2', 'Co-Initiator, Koordination & Produkt'),
      new TeamMember('Julia', '../../../assets/images/portraits/Julia.jpg', '#1b78f2', 'Koordination & Kommunikation'),
      new TeamMember('Michael', '../../../assets/images/portraits/Michael.jpg', '#5a13f2', 'Kommunikation & Strategie'),
      new TeamMember('Patrick', '../../../assets/images/portraits/Patrick.jpg', '#1b78f2', 'Kommunikation & Social Media'),
      new TeamMember('Lukas', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung'),
      new TeamMember('Emine', '../../../assets/images/portraits/Emine.jpg', '#1b78f2', 'Design'),
      new TeamMember('Sophia', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung'),
      new TeamMember('Ena', '../../../assets/images/portraits/Ena.jpg', '#1b78f2', 'Design'),
      new TeamMember('Florian', '../../../assets/images/portraits/noimage.png', '#5a13f2', 'Recht'),
      new TeamMember('Lena', '../../../assets/images/portraits/Lena.jpg', '#5a13f2', 'Strategie & Produkt'),
      new TeamMember('Lara', '../../../assets/images/portraits/Lara.jpg', '#c004d9', 'Social Media'),
      new TeamMember('Paula', '../../../assets/images/portraits/Paula.jpg', '#1b78f2', 'Design'),
      new TeamMember('Sahin', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung'),
      new TeamMember('Nikolai', '../../../assets/images/portraits/Nico.jpg', '#c004d9', 'Entwicklung'),
      new TeamMember('Lena', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung'),
      new TeamMember('Julia', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung'),
      new TeamMember('Konstantin', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung'),
      new TeamMember('Sonja', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung'),
      new TeamMember('Tilman', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung'),
      new TeamMember('Fabian', '../../../assets/images/portraits/noimage.png', '#5a13f2', 'Strategie'),
      new TeamMember('Kevin', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung'),
      new TeamMember('Ben', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung'),
      new TeamMember('Bastian', '../../../assets/images/portraits/noimage.png', '#c004d9', 'Entwicklung')
    ];
    this.mitmachenheadline = 'Du möchtest mitmachen?';
    this.mitmachendescription =
      'Du bist von unserem Vorhaben begeistert und möchtest Dich einbringen? Dann werde ' +
      'Teil von impact! Wir freuen uns über jede Unterstützung für unser ambitioniertes Projekt. Ob als „freie ' +
      'MitarbeiterIn“ oder als Mitglied, Du kannst den Bereich und Umfang Deines Engagements selbst bestimmen.';
    this.mitmachenbutton = 'Kontaktiere uns';
    this.instaheadline = 'Folge uns auf Instagram!';
    this.instadescription = 'Bleib immer auf dem Laufenden durch unsere Social Media Accounts';
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
    clonedModel.instaheadline = this.instaheadline;
    clonedModel.instadescription = this.instadescription;
    return clonedModel;
  }
}

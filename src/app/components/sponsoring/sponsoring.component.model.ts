import { DomSanitizer } from '@angular/platform-browser';

export class SponsoringComponentModel {
  public sponsorheadline: string;
  public untersuetzung: string[];
  public profitieren: string[];
  public spende: string[];
  public sponsorbutton: string;

  constructor(private sanitizer: DomSanitizer) {
    this.sponsorheadline = 'Sie möchten Sponsor werden?';
    this.untersuetzung = [
      'Wofür benötigen wir Ihre Hilfe?',
      'impact verfolgt ausschließlich gemeinnützige Ziele und wird von jungen Studierenden getragen. ' +
        'Der Verein verfügt über keine nennenswerten Einkommensquellen. Gleichzeitig ist der Betrieb der App mit erheblichen ' +
        'Kosten verbunden, ebenso die anfänglich nötigen Werbemaßnahmen. ' +
        'Nur so können wir den Nutzern das versprochene, einzigartige Nutzungserlebnis und die erfolgsentscheidende, ' +
        'bundesweite Vernetzung bieten.'
    ];
    this.profitieren = [
      'Win-Win: Was können Sie von uns erwarten?',
      'Sie können ein gemeinnütziges Projekt unterstützen, welches soziales Engagement und dessen gesellschaftliche Anerkennung ' +
        'fördert und damit ein elementarer Bestandteil davon werden - ohne Ihre Spenden läuft bei uns buchstäblich nichts. ' +
        'Neben dem erfüllenden Gefühl, etwas Gutes zu tun, erhalten Sie von uns als Dankeschön einen prominenten Platz auf ' +
        'unserer Projektseite und in der App, wodurch Sie konkret an Sichtbarkeit, Reichweite und Reputation dazugewinnen. '
    ];
    this.spende = [
      'Sie möchten uns unterstützen?',
      'Wunderbar! Wegen unserer noch laufenden Vereinsgründung inklusive Anerkennung der Gemeinnützigkeit können wir Ihnen ' +
        'derzeit leider noch keine automatisierte Spendenmöglichkeit anbieten. ' +
        'Bitte nehmen Sie daher direkt Kontakt mit unserem Team auf.'
    ];
    this.sponsorbutton = 'Kontaktieren Sie uns';
  }
  public clone(): SponsoringComponentModel {
    const clonedModel: SponsoringComponentModel = new SponsoringComponentModel(this.sanitizer);
    clonedModel.sponsorheadline = this.sponsorheadline;
    clonedModel.untersuetzung = this.untersuetzung;
    clonedModel.profitieren = this.profitieren;
    clonedModel.spende = this.spende;
    clonedModel.sponsorbutton = this.sponsorbutton;
    return clonedModel;
  }
}

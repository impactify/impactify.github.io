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
      'Ihre Unterstützung zählt',
      'impact verfolgt ausschließlich gemeinnützige Ziele und wird von ' +
        'jungen Studierenden getragen. Der Verein verfügt über keine nennenswerten Einnahmen. Gleichzeitig ist der Betrieb der App, sowie die anfangs nötigen ' +
        'Werbemaßnahmen mit erheblichen Kosten verbunden. Nur mit Ihrer Hilfe können wir den NutzerInnen das optimale Erlebnis bieten und sie bundesweit vernetzen.'
    ];
    this.profitieren = [
      'Sie profitieren ebenfalls',
      'Unterstützen Sie ein gemeinnütziges ' +
        'Projekt und fördern somit soziales Engagement und dessen gesellschaftliche Anerkennung. Sie gehören damit zum Fundament von ' +
        'impact, denn ohne Ihre Spende läuft bei uns nichts. ' +
        'Tun Sie etwas Gutes, erhalten Sie von uns als Dankeschön einen prominenten Platz auf unserer Projektseite, sowie in ' +
        'der App und gewinnen Sie an Sichtbarkeit, Reichweite und Ansehen. '
    ];
    this.spende = [
      'Wir freuen uns über Ihre Spende',
      'Vor allem in der IT- Infrastruktur und im Marketing fallen Projektkosten an, die ' +
        'finanziert werden müssen. Sie können uns dabei unterstützen, unsere Idee zu ' +
        'verwirklichen und umzusetzen. Gerne lassen wir Ihnen eine Aufstellung ' +
        'zukommen, damit Sie nachvollziehen können wofür Ihre Spende verwendet ' +
        'wurde.'
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

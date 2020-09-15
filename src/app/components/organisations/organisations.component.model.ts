import { DomSanitizer } from '@angular/platform-browser';

export class OrganisationComponentModel {
  public organisationheadline: string;
  public ehrenamt: string[];
  public knoten: string[];
  public ergaenzen: string[];
  public organisationbutton: string;

  constructor(private sanitizer: DomSanitizer) {
    this.organisationheadline = 'Eure Organisation möchte dabei sein?';
    this.ehrenamt = [
      'Wir bringen frischen Wind',
      'Dem Ehrenamt fehlt es zunehmend an tragenden Schultern. Wir wollen das ändern. ' +
        'Die Plattform erleichtert Motivierten den Einstieg, nimmt Druck und Ängste, erweitert die Möglichkeiten, verpasst ' +
        'sozialem Engagement ein frischeres Image und steigert die Wertschätzung. ' +
        'Ihr könnt durch impact mit vielen neuen MitstreiterInnen rechnen - speziell die Jüngeren möchten wir durch unser Konzept ' +
        'erreichen und von unserer Vision überzeugen. '
    ];
    this.knoten = [
      'Wir sind der Knotenpunkt',
      'Als zentrale, bundesweite Anlaufstelle rund um soziales Engagement werden sich ' +
        'Sichtbarkeit und Reichweite Eurer Organisation und Arbeit deutlich ' +
        'erhöhen. Gleichzeitig erreicht Ihr Eure Zielgruppe mit kleinerem Aufwand, da Ihr weniger verschiedene Kanäle bedienen müsst. ' +
        'Wir nehmen Euch Organisationsaufwand ab, damit Ihr Euch aufs Helfen konzentrieren könnt.'
    ];
    this.ergaenzen = [
      'Wir ergänzen uns',
      'Unser Team hat das notwendige Know-How, das ambitionierte Projekt umzusetzen. ' +
        'Um Euch bestmöglich zu unterstützen, brauchen wir jedoch Eure langjährige Praxiserfahrung im Ehrenamt als Input. ' +
        'Wir verstehen uns gewissermaßen als "Dienstleister" für Euren so wertvollen Einsatz für die Gesellschaft, ' +
        'weshalb wir uns einen engen Austausch und langfristige Partnerschaften wünschen.'
    ];
    this.organisationbutton = 'Kontaktiert uns';
  }

  public clone(): OrganisationComponentModel {
    const clonedModel: OrganisationComponentModel = new OrganisationComponentModel(this.sanitizer);
    clonedModel.organisationheadline = this.organisationheadline;
    clonedModel.ehrenamt = this.ehrenamt;
    clonedModel.knoten = this.knoten;
    clonedModel.ergaenzen = this.ergaenzen;
    clonedModel.organisationbutton = this.organisationbutton;
    return clonedModel;
  }
}

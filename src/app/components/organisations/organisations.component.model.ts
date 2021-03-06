import { DomSanitizer } from '@angular/platform-browser';

export class OrganisationComponentModel {
  public organisationheadline: string;
  public ehrenamt: string[];
  public knoten: string[];
  public ergaenzen: string[];
  public organisationbutton: string;
  public partnerheadline: string;

  constructor(private sanitizer: DomSanitizer) {
    this.organisationheadline = 'Eure Organisation möchte dabei sein?';
    this.ehrenamt = [
      'Wir bringen das Ehrenamt weiter',
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
      'Wir ergänzen uns - werdet unser Partner',
      'Die Vorfreude reicht Euch nicht und Ihr wollt Euch schon jetzt einbringen? ' +
        'Dann begleitet uns auf unserem Weg und werdet unser Partner! ' +
        'Unser Team hat das notwendige Know-How, das ambitionierte Projekt umzusetzen, ' +
        'jedoch brauchen wir Eure langjährige Praxiserfahrung als Expert:innen im Ehrenamt. ' +
        'Ein enger Austausch und eine langfristige ' +
        'Zusammenarbeit geben uns den nötigen Input für eine optimale Entwicklung der Plattform. '
    ];
    this.organisationbutton = 'Kontaktiert uns';
    this.partnerheadline = 'Unsere Partner';
  }

  public clone(): OrganisationComponentModel {
    const clonedModel: OrganisationComponentModel = new OrganisationComponentModel(this.sanitizer);
    clonedModel.organisationheadline = this.organisationheadline;
    clonedModel.ehrenamt = this.ehrenamt;
    clonedModel.knoten = this.knoten;
    clonedModel.ergaenzen = this.ergaenzen;
    clonedModel.organisationbutton = this.organisationbutton;
    clonedModel.partnerheadline = this.partnerheadline;
    return clonedModel;
  }
}

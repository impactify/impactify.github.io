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
      'Wir bringen das Ehrenamt weiter',
      'Durch Umfragen haben wir festgestellt, dass sich immer weniger junge Menschen im Ehrenamt engagieren. ' +
        'Wir wollen den Trend neu setzen und mit unserer App insbesondere den jüngeren Teil der Gesellschaft ansprechen, um ihn mit euch zu zusammenzubringen. ' +
        'So könnt ihr mit mehr Mitstreiter*innen und Nachwuchs rechnen.  '
    ];
    this.knoten = [
      'Wir sind der Knotenpunkt',
      'Als zentrale, bundesweite Anlaufstelle rund um das Ehrenamt wird sich die ' +
        'Sichtbarkeit und Reichweite eurer Organisation und Arbeit deutlich ' +
        'erhöhen. Gleichzeitig erreicht ihr eure Zielgruppe mit kleinerem Aufwand, da ihr weniger verschiedene Kanäle bedienen müsst.'
    ];
    this.ergaenzen = [
      'Wir ergänzen uns',
      'Durch die fachspezifischen Kenntnisse und Erfahrungen der ' +
        'Teammitglieder*innen sind wir der vielseitigen Aufgabe, diese Plattform ' +
        'zu konzipieren und zu entwickeln, gewachsen. Was uns fehlt ist das „Ehrenamts-Know-How“. Wir benötigen ' +
        'eure Erfahrungen, um euch bestmöglich bei euren Vorhaben zu unterstützen.  '
    ];
    this.organisationbutton = 'Kontaktiere uns';
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

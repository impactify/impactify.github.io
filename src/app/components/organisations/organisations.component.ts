import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../services/application-state.service';
import { OrganisationComponentModel } from './organisations.component.model';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.desktop.scss']
})
export class OrganisationsComponent {
  private model: OrganisationComponentModel;
  public myViewModel: OrganisationComponentModel;
  public isMobileResolution: boolean;

  constructor(private router: Router, private sanitizer: DomSanitizer, applicationStateService: ApplicationStateService) {
    this.model = new OrganisationComponentModel(sanitizer);
    this.myViewModel = new OrganisationComponentModel(sanitizer);
    this.loadOrganisations();
    this.updateView();
    this.isMobileResolution = applicationStateService.getIsMobileResolution();
  }

  private loadOrganisations(): void {
    // fills the organisations parameters inside the model
  }

  private updateView(): void {
    this.myViewModel = this.model.clone();
  }
}

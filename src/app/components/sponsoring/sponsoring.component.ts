import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../application-state.service';
import { SponsoringComponentModel } from './sponsoring.component.model';

@Component({
  selector: 'app-sponsoring',
  templateUrl: './sponsoring.component.html',
  styleUrls: ['./sponsoring.component.desktop.scss']
})
export class SponsoringComponent {
  private model: SponsoringComponentModel;
  public myViewModel: SponsoringComponentModel;
  public isMobileResolution: boolean;

  constructor(private router: Router, private sanitizer: DomSanitizer, applicationStateService: ApplicationStateService) {
    this.model = new SponsoringComponentModel(sanitizer);
    this.myViewModel = new SponsoringComponentModel(sanitizer);
    this.loadSponsoring();
    this.updateView();
    this.isMobileResolution = applicationStateService.getIsMobileResolution();
  }

  private loadSponsoring(): void {
    // fills the sponsoring parameters inside the model
  }

  private updateView(): void {
    this.myViewModel = this.model.clone();
  }
}

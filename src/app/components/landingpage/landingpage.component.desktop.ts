import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../application-state.service';
import { LandingpageComponent } from './landingpage.component';

@Component({
  selector: 'app-landingpage-desktop',
  templateUrl: './landingpage.component.desktop.html',
  styleUrls: ['./landingpage.component.desktop.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingpageDesktopComponent extends LandingpageComponent {
  constructor(router: Router, sanitizer: DomSanitizer, applicationStateService: ApplicationStateService) {
    super(router, sanitizer, applicationStateService);
  }
}

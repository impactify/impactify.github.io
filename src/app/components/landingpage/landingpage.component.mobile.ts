import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../application-state.service';
import { LandingpageComponent } from './landingpage.component';

@Component({
  selector: 'app-landingpage-mobile',
  templateUrl: './landingpage.component.mobile.html',
  styleUrls: ['./landingpage.component.mobile.scss']
})
export class LandingpageMobileComponent extends LandingpageComponent {
  constructor(router: Router, sanitizer: DomSanitizer, applicationStateService: ApplicationStateService) {
    super(router, sanitizer, applicationStateService);
  }
}

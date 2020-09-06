import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage.component';
import { ApplicationStateService } from '../../application-state.service';

@Component({
  selector: 'app-landingpage-mobile',
  templateUrl: './landingpage.component.mobile.html',
  styleUrls: ['./landingpage.component.mobile.scss']
})
export class LandingpageMobileComponent extends LandingpageComponent {

  constructor(router: Router,
              sanitizer: DomSanitizer,
              applicationStateService: ApplicationStateService) {
    super(router, sanitizer, applicationStateService);
  }

}

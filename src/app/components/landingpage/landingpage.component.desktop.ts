import { Component, ViewEncapsulation } from "@angular/core";
import { LandingpageComponent } from './landingpage.component';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ApplicationStateService } from '../../application-state.service';

@Component({
  selector:    'app-landingpage-desktop',
  templateUrl: './landingpage.component.desktop.html',
  styleUrls:   ['./landingpage.component.desktop.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingpageDesktopComponent extends LandingpageComponent {

  constructor(router: Router,
              sanitizer: DomSanitizer,
              applicationStateService: ApplicationStateService) {
    super(router, sanitizer, applicationStateService);
  }

}

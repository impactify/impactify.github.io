import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { ApplicationStateService } from '../../application-state.service';
import { LandingpageComponent } from './landingpage.component';

@Component({
  selector: 'app-landingpage-desktop',
  templateUrl: './landingpage.component.desktop.html',
  styleUrls: ['./landingpage.component.desktop.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingpageDesktopComponent extends LandingpageComponent {
  constructor(
    router: Router,
    sanitizer: DomSanitizer,
    applicationStateService: ApplicationStateService,
    snackBar: MatSnackBar,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {
    super(router, sanitizer, applicationStateService, snackBar);
  }
}

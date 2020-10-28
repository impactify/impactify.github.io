import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../services/application-state.service';
import { InstagramFeedService } from '../../services/instagram-feed.service';
import { LandingpageComponent } from './landingpage.component';

@Component({
  selector: 'app-landingpage-mobile',
  templateUrl: './landingpage.component.mobile.html',
  styleUrls: ['./landingpage.component.mobile.scss']
})
export class LandingpageMobileComponent extends LandingpageComponent {
  public instaFeed = [];

  constructor(router: Router, sanitizer: DomSanitizer, applicationStateService: ApplicationStateService, snackBar: MatSnackBar, private instagramFeedService: InstagramFeedService) {
    super(router, sanitizer, applicationStateService, snackBar);
    this.instaFeed = this.instagramFeedService.getInstaFeed();
  }
}

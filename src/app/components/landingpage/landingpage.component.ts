import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';
import { ApplicationStateService } from '../../services/application-state.service';
import { LandingpageComponentModel } from './landingpage.component.model';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html'
})
export class LandingpageComponent implements OnInit {
  private model: LandingpageComponentModel;
  public myViewModel: LandingpageComponentModel;

  public isMobileResolution: boolean;
  public instaFeed = [];

  constructor(private router: Router, private sanitizer: DomSanitizer, private applicationStateService: ApplicationStateService, private snackBar: MatSnackBar) {
    this.model = new LandingpageComponentModel(sanitizer);
    this.myViewModel = new LandingpageComponentModel(sanitizer);
    this.loadLandingpage();
    this.updateView();
    this.isMobileResolution = applicationStateService.getIsMobileResolution();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  private loadLandingpage(): void {
    // fills the landingpage parameters inside the model
  }

  private updateView(): void {
    this.myViewModel = this.model.clone();
  }
  ngOnInit(): void {
    AOS.init();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}

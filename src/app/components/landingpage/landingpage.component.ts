import { Component, Inject, OnInit } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { ApplicationStateService } from '../../application-state.service';
import { LandingpageComponentModel } from './landingpage.component.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DOCUMENT } from '@angular/common';
import { PageScrollInstance, PageScrollService } from "ngx-page-scroll-core";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.desktop.scss']
})
export class LandingpageComponent implements OnInit {
  private model: LandingpageComponentModel;
  public myViewModel: LandingpageComponentModel;

  public isMobileResolution: boolean;

  constructor(private router: Router, private sanitizer: DomSanitizer, private applicationStateService: ApplicationStateService, private snackBar: MatSnackBar) {
    this.model = new LandingpageComponentModel(sanitizer);
    this.myViewModel = new LandingpageComponentModel(sanitizer);

    this.loadLandingpage();
    this.updateView();
    this.isMobileResolution = applicationStateService.getIsMobileResolution();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
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
  }
}

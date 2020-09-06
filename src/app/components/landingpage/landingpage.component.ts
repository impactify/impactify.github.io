import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { LandingpageComponentModel } from './landingpage.component.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../application-state.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.desktop.scss']
})
export class LandingpageComponent implements OnInit {

  private model: LandingpageComponentModel;
  public myViewModel: LandingpageComponentModel;

  public isMobileResolution: boolean;

  constructor(private router: Router,
              private sanitizer: DomSanitizer,
              private applicationStateService: ApplicationStateService) {
    this.model = new LandingpageComponentModel(sanitizer);
    this.myViewModel = new LandingpageComponentModel(sanitizer);

    this.loadLandingpage();
    this.updateView();
    this.isMobileResolution = applicationStateService.getIsMobileResolution();
  }

  private loadLandingpage(): void {
    // fills the product parameters inside the model
  }

  private updateView(): void {
    this.myViewModel = this.model.clone();
  }
  ngOnInit(): void {
    AOS.init();
  }
}

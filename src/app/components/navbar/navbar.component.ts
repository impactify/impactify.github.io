import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../application-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.desktop.scss']
})
export class NavbarComponent {
  public isMobileResolution: boolean;

  constructor(private router: Router, private sanitizer: DomSanitizer, applicationStateService: ApplicationStateService) {
    this.isMobileResolution = applicationStateService.getIsMobileResolution();
  }
}

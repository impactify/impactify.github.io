import { Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../services/application-state.service';
import { SponsoringComponent } from './sponsoring.component';

@Component({
  selector: 'app-sponsoring-mobile',
  templateUrl: './sponsoring.component.mobile.html',
  styleUrls: ['./sponsoring.component.mobile.scss']
})
export class SponsoringMobileComponent extends SponsoringComponent {
  constructor(router: Router, sanitizer: DomSanitizer, applicationStateService: ApplicationStateService) {
    super(router, sanitizer, applicationStateService);
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth > 768) {
      window.location.reload();
    }
  }
}

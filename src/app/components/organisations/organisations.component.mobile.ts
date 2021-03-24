import { Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../services/application-state.service';
import { OrganisationsComponent } from './organisations.component';

@Component({
  selector: 'app-organisations-mobile',
  templateUrl: './organisations.component.mobile.html',
  styleUrls: ['./organisations.component.mobile.scss']
})
export class OrganisationsMobileComponent extends OrganisationsComponent {
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

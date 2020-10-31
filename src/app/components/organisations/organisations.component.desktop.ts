import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../services/application-state.service';
import { OrganisationsComponent } from './organisations.component';

@Component({
  selector: 'app-organisations-desktop',
  templateUrl: './organisations.component.desktop.html',
  styleUrls: ['./organisations.component.desktop.scss']
})
export class OrganisationsDesktopComponent extends OrganisationsComponent {
  constructor(router: Router, sanitizer: DomSanitizer, applicationStateService: ApplicationStateService) {
    super(router, sanitizer, applicationStateService);
  }
}

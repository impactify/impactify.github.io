import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar.component.mobile.html',
  styleUrls: ['./navbar.component.mobile.scss']
})
export class NavbarMobileComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

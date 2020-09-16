import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar.component.desktop.html',
  styleUrls: ['./navbar.component.desktop.scss']
})
export class NavbarDesktopComponent {}
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const maxScroll = document.body.clientHeight - window.innerHeight;
  const currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById('navbar');
  if (navbar !== null) {
    if ((maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) || (maxScroll <= 0 && prevScrollpos > currentScrollPos) || (prevScrollpos <= 0 && currentScrollPos <= 0)) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '-100px';
    }
    prevScrollpos = currentScrollPos;
  }
};

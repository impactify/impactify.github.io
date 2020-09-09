import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar.component.desktop.html',
  styleUrls: ['./navbar.component.desktop.scss']
})
export class NavbarDesktopComponent {
}
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-100px';
  }
  prevScrollpos = currentScrollPos;
};

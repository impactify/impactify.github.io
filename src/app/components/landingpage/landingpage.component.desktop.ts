import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../services/application-state.service';
import { InstagramFeedService } from '../../services/instagram-feed.service';
import { LandingpageComponent } from './landingpage.component';
declare let anime: any;

@Component({
  selector: 'app-landingpage-desktop',
  templateUrl: './landingpage.component.desktop.html',
  styleUrls: ['./landingpage.component.desktop.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingpageDesktopComponent extends LandingpageComponent implements AfterViewInit {
  public instaFeed = [];

  constructor(router: Router, sanitizer: DomSanitizer, applicationStateService: ApplicationStateService, snackBar: MatSnackBar, private instagramFeedService: InstagramFeedService) {
    super(router, sanitizer, applicationStateService, snackBar);
    this.instaFeed = this.instagramFeedService.getInstaFeed();
  }

  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.header-text');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime({
      targets: '.header-text .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 2000,
      delay: (el, i) => 500 + 50 * i
    });

    const arrow = document.querySelectorAll('.arrow');
    anime({
      targets: arrow,
      translateY: -20,
      delay: 100,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  }
}

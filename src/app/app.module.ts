import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { CarouselModule, NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LandingpageDesktopComponent } from './components/landingpage/landingpage.component.desktop';
import { LandingpageMobileComponent } from './components/landingpage/landingpage.component.mobile';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarDesktopComponent } from './components/navbar/navbar.component.desktop';
import { NavbarMobileComponent } from './components/navbar/navbar.component.mobile';
import { OrganisationsComponent } from './components/organisations/organisations.component';
import { OrganisationsDesktopComponent } from './components/organisations/organisations.component.desktop';
import { OrganisationsMobileComponent } from './components/organisations/organisations.component.mobile';
import { SponsoringComponent } from './components/sponsoring/sponsoring.component';
import { SponsoringDesktopComponent } from './components/sponsoring/sponsoring.component.desktop';
import { SponsoringMobileComponent } from './components/sponsoring/sponsoring.component.mobile';
import { MaterialModule } from './material.module';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pinch: { enable: false },
    rotate: { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    NavbarComponent,
    NavbarDesktopComponent,
    NavbarMobileComponent,
    FooterComponent,
    SponsoringComponent,
    OrganisationsComponent,
    LandingpageMobileComponent,
    LandingpageDesktopComponent,
    ImpressumComponent,
    DatenschutzComponent,
    OrganisationsDesktopComponent,
    OrganisationsMobileComponent,
    SponsoringDesktopComponent,
    SponsoringMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ScullyLibModule,
    BrowserAnimationsModule,
    CarouselModule,
    WavesModule,
    HammerModule,
    IvyCarouselModule,
    NavbarModule,
    NgxPageScrollCoreModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

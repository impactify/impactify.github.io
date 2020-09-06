import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LandingpageDesktopComponent } from './components/landingpage/landingpage.component.desktop';
import { LandingpageMobileComponent } from './components/landingpage/landingpage.component.mobile';
import { NavbarComponentMobile } from './components/navbar/navbar.component.mobile';
import { OrganisationsComponent } from './components/organisations/organisations.component';
import { SponsoringComponent } from './components/sponsoring/sponsoring.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, LandingpageComponent, NavbarComponentMobile, FooterComponent, SponsoringComponent, OrganisationsComponent, LandingpageMobileComponent, LandingpageDesktopComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, ScullyLibModule, BrowserAnimationsModule, CarouselModule, WavesModule, HammerModule, IvyCarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

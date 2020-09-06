import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrganisationsComponent } from './components/organisations/organisations.component';
import { SponsoringComponent } from './components/sponsoring/sponsoring.component';
import { MaterialModule } from './material.module';
import { LandingpageMobileComponent } from './components/landingpage/landingpage.component.mobile';
import { LandingpageDesktopComponent } from './components/landingpage/landingpage.component.desktop';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [AppComponent, LandingpageComponent, NavbarComponent, FooterComponent, SponsoringComponent, OrganisationsComponent, LandingpageMobileComponent, LandingpageDesktopComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, ScullyLibModule, BrowserAnimationsModule, CarouselModule, WavesModule, HammerModule, IvyCarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

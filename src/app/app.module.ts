import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { MainComponent } from './components/landingpage/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrganisationsComponent } from './components/organisations/organisations.component';
import { SponsoringComponent } from './components/sponsoring/sponsoring.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, LandingpageComponent, NavbarComponent, MainComponent, FooterComponent, SponsoringComponent, OrganisationsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

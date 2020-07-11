import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './landingpage/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from './landingpage/main/main.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [AppComponent, LandingpageComponent, NavbarComponent, MainComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatGridListModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

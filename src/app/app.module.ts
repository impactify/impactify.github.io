import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MainComponent } from './landingpage/main/main.component';
import { NavbarComponent } from './landingpage/navbar/navbar.component';
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [AppComponent, LandingpageComponent, NavbarComponent, MainComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatGridListModule, ScullyLibModule, MatMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

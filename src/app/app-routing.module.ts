import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { OrganisationsComponent } from './components/organisations/organisations.component';
import { SponsoringComponent } from './components/sponsoring/sponsoring.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'sponsoring', component: SponsoringComponent },
  { path: 'organizations', component: OrganisationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

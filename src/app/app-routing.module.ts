import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitePageComponent } from './site-page/site-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VoirPlusPageComponent } from './voir-plus-page/voir-plus-page.component';

const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  {
    path: 'site/:id',
    component: SitePageComponent,
  },
  {
    path: 'site/:id/offre/:ref',
    component: VoirPlusPageComponent,
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

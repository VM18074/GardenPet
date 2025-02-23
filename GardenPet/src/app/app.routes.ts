import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DonateComponent } from './pages/donate/donate.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { AdoptComponent } from './pages/adopt/adopt.component';
import { MoreinfoComponent } from './pages/moreinfo/moreinfo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'adopt', component: AdoptComponent },
  { path: 'moreinfo', component: MoreinfoComponent },
  { path: '**', redirectTo: '/home' }
];

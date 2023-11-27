import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { CarasoulComponent } from './components/listing/details/carasoul/carasoul.component';
import { VideoComponent } from './components/listing/details/video/video.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'terms-connditions', component: TermsConditionsComponent },
  {
    path: 'listing',
    loadComponent: () =>
      import('./components/listing/listing.component').then(
        (m) => m.ListingComponent
      ),
  },
  {
    path: 'posting',
    loadComponent: () =>
      import('./components/posting/posting.component').then(
        (m) => m.PostingComponent
      ),
  },
  {
    path: 'buysell',
    loadComponent: () =>
      import('./components/buysell/buysell.component').then(
        (m) => m.BuysellComponent
      ),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./components/contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./components/listing/details/details.component').then(
        (m) => m.DetailsComponent
      ),
    children: [
      { path: 'photos', component: CarasoulComponent, pathMatch: 'full' },
      { path: 'video', component: VideoComponent, pathMatch: 'full' },
    ],
  },
  {
    path: 'postdetails/:id',
    loadComponent: () =>
      import('./components/posting/details/details.component').then(
        (m) => m.DetailsComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'reset',
    loadComponent: () =>
      import('./components/auth/reset/reset.component').then(
        (m) => m.ResetComponent
      ),
  },
  {
    path: 'forget',
    loadComponent: () =>
      import('./components/auth/forget/forget.component').then(
        (m) => m.ForgetComponent
      ),
  },
];

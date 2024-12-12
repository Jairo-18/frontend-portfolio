import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },

  {
    path: 'about-me',
    loadComponent: () =>
      import('./components/about-me/about-me.component').then(
        (m) => m.AboutMeComponent
      ),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },

  {
    path: '**',
    redirectTo: '/home',
  },
];

import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'about-me',
        loadComponent: () =>
          import('./about-me/about-me.component').then(
            (m) => m.AboutMeComponent
          ),
      },

      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },

      {
        path: 'contact',
        loadComponent: () =>
          import('./contact/contact.component').then((m) => m.ContactComponent),
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];

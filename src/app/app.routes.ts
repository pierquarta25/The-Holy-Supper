import { Routes } from '@angular/router';

/* 
 * Definizione delle rotte dell'applicazione.
 */
export const routes: Routes = [
  { path: '', redirectTo: '/en', pathMatch: 'full' },
  {
    path: ':locale',
    children: [
      { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
      { path: 'waiting-list', loadComponent: () => import('./pages/waiting-list/waiting-list.component').then(m => m.WaitingListComponent) },
      { path: 'gluten-free', loadComponent: () => import('./pages/gluten-free/gluten-free.component').then(m => m.GlutenFreeComponent) },
      { path: 'privacy', loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent) },
      { path: 'cookies', loadComponent: () => import('./pages/cookies/cookies.component').then(m => m.CookiesComponent) },
      { path: 'terms', loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent) },
    ]
  },
  { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) }
];

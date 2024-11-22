import { Routes } from '@angular/router';
import { loginGuard } from './core/guard/login/login.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'cat-facts',
    loadComponent: () =>
      import('./features/cat-facts/cat-facts.component').then(
        (m) => m.CatFactsComponent
      ),
    canActivate: [loginGuard],
  },
  { path: '**', redirectTo: '' },
];

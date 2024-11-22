import { Routes } from '@angular/router';
import { loginGuard } from './core/guard/login/login.guard';
import { CAT_FACTS, LOGIN } from './utils/const';

export const routes: Routes = [
  { path: '', redirectTo: LOGIN, pathMatch: 'full' },
  {
    path: LOGIN,
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
    canActivate: [loginGuard],
    data: { redirectIfLoggedIn: true },
  },
  {
    path: CAT_FACTS,
    loadComponent: () =>
      import('./features/cat-facts/cat-facts.component').then(
        (m) => m.CatFactsComponent
      ),
    canActivate: [loginGuard],
    data: { redirectIfLoggedIn: false },
  },
  { path: '**', redirectTo: LOGIN },
];

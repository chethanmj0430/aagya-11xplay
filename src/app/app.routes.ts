import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app.routes').then(m => m.appRoutes),
  },
  {
    path: 'dashbaords',
    loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES),
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile/profile.routes').then(m => m.PROFILE_ROUTES),
  },
  {
    path: 'account-statement',
    loadChildren: () => import('./features/account-statement/account-statement.routes').then(m => m.ACCOUNT_STATEMENT_ROUTES),
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'register' },
    { path: 'register', loadComponent: () => import('@c/register/register.component').then(m => m.RegisterComponent) },
    { path: 'signin', loadComponent: () => import('@c/signin/signin.component').then(m => m.SigninComponent) },
];

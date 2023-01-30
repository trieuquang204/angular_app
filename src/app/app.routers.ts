import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: FirstComponent
  },
  {
    path: 'about',
    component: SecondComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

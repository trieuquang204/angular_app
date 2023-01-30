import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './services/guards/auth.guard';

export const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/index',
  //   pathMatch: 'full'
  // },
  {
    path: 'contact',
    component: FirstComponent
  },
  {
    path: 'about',
    component: SecondComponent
  },
  {
    path: 'product:/id',
    // component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductDetailComponent,
      },
      {
        path: 'edit',
        component: ProductEditComponent,
      },
    ],
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

import { Routes } from '@angular/router';

import { ProductsComponent } from "./components/products/products.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductEditComponent } from "./components/product-edit/product-edit.component";

import { AuthGuard } from './services/guards/auth.guard';

export const productRoutes : Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'product/:id/edit',
    component: ProductEditComponent,
  }
]
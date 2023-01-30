import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsComponent } from './components/products/products.component';

// Service
import { ProductService } from './services/product.service';

import { productRoutes } from './product-management.routers';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(productRoutes)
  ],
  providers: [
    ProductService,
  ]
})
export class ProductManagementModule { }

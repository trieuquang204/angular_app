import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.class';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];
  constructor(
    public productService: ProductService,
  ) {}

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }
}

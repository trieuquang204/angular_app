import { Component } from '@angular/core';
import { Product } from 'src/app/product-management/models/product.class';
import { ProductService } from 'src/app/product-management/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public products: Product[] = [];
  public name : string = '';
  public price : number = 0;

  constructor(
    public productService: ProductService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute,
    // public queryParamsSubscription : Subscription,
  ) {}

  ngOnInit() {
     this.activatedRoute.queryParams.subscribe(data => {
      // console.log('data', data)
      let name = data['name'],
      price = data['price'];
      this.products = this.productService.getAllProducts(name, price)
    })
  }

  onSearch() {
    this.routerService.navigate(['/products'], { queryParams: { name: this.name, price: this.price } })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductService } from 'src/app/product-management/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  public product : any = [];
  public name : any = '';
  public price : any = null;
  public status : any = null;

  constructor(
    public activatedRoute : ActivatedRoute,
    public productService : ProductService,
  ) {}

  ngOnInit(): void {
    this.handleParams()
  }

  handleParams() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = +params['id'];
      this.product = this.productService.getProductById(id);
      this.name = this.product.name;
      this.price = this.product.price;
      this.status = this.product.status;
    })
  }
}

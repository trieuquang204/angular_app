import { Injectable } from '@angular/core';
import { Product } from '../models/product.class';

@Injectable()
export class ProductService {

  public products : Product[] = [
    {
      id: 1,
      name: 'Iphone 7 plus',
      price: 44,
      status: true
    },
    {
      id: 2,
      name: 'Iphone 8 plus',
      price: 11,
      status: false
    },
    {
      id: 3,
      name: 'Oppo',
      price: 123,
      status: true
    },
  ];

  constructor() { }

  getAllProducts(name? : string, price? : number) {
    let result: Product[] = this.products;

    if(name) {
      result = this.products.filter(x => {
        return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
      })
    }

    if(price) {
      result = this.products.filter(x => {
        return x.price == price
      })
    }
    return result;
  }

  getProductById(id: number) {
    let result = null;
    for(let i = 0; i < this.products.length; i++) {
      if(this.products[i].id === id) {
        result = this.products[i];
        break;
      }
    }
    return result;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.class';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public product : any = [];
  public subscription : any = Subscription;

constructor(
  public activeRoute : ActivatedRoute,
  public productService : ProductService,
) {

}

  ngOnInit() {
    // this.handleParamsRouteBySnapShot()
    // console.log('quang', this.activeRoute.snapshot.params['id'])
    // let id = +this.activeRoute.snapshot.params['id'];
    // this.product = this.productService.getProductById(id);

    this.handleParams()
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleParams() {
    this.subscription = this.activeRoute.params.subscribe(data => {
      let id = +data['id'];
      this.product = this.productService.getProductById(id);
    })
  }

  handleParamsRouteBySnapShot() {
    let id = +this.activeRoute.snapshot.params['id'];
    this.product = this.productService.getProductById(id);
  }
}

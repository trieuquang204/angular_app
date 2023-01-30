import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product-management/models/product.class';
import { ProductService } from 'src/app/product-management/services/product.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  public routerService : Router
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

  onBackToList() {
    // this.routerService.navigate(['products/list'])

    this.routerService.navigate(['list'], {
      relativeTo: this.activeRoute.parent
    })
  }

  onEdit() {
    // this.routerService.navigate([`/products/edit/${this.product.id}`])

    this.routerService.navigate(['edit'], {
      relativeTo: this.activeRoute.parent
    })
  }

  onDelete() {}
}

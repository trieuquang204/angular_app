import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './services/apiservice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title: string = "Quan ly phim";


  constructor(
    public routerService: Router,
    public myDataService: ApiService
  ) {

  }

  ngOnInit() {
    // this.products = this.productService.getAllProducts();

    this.myDataService.getData().subscribe((data) => {
      console.log('quangg', data)
    })
  }

  navigate(url: string) {
    // this.routerService.navigate([url])
    // c2:
    this.routerService.navigateByUrl(url)
  }

}

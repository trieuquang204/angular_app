import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = "Quan ly phim";


  constructor(
    public routerService: Router,
  ) {

  }

  ngOnInit() {
    // this.products = this.productService.getAllProducts();
  }

  navigate(url: string) {
    // this.routerService.navigate([url])
    // c2:
    this.routerService.navigateByUrl(url)
  }

}

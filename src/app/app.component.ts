import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public total:number = 0
  public a:number = 0;
  public b:number= 0;

  ngOnInit() {

  }

  amount() {
    this.total = +this.a + +this.b

    console.log('quang', this.total)
  }
}

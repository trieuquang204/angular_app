import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isMarried:boolean = false;
  public txtFullName:string = '';

  onGetFullName(value:string) {
    this.txtFullName = value
  }
}

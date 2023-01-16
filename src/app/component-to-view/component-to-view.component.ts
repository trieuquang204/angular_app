import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit {

 public txtFullName:string = "";
 @Output('tttttt') onHandleFullName = new EventEmitter<string>();



  constructor() {}

  ngOnInit() {

  }

  onSubmitForm() {
    this.onHandleFullName.emit(this.txtFullName)
  }
}

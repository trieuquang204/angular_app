import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit, OnChanges {

  @Input('total') totalCon:any = null

  constructor() {
    console.log('constructor')
  }

  ngOnInit() {

  }

  ngOnChanges(SimpleChange:any) {
    console.log('ngOnChanges')
    console.log('SimpleChange', SimpleChange)
  }
}

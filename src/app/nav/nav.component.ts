import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nava',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
@Output() navSelected = new EventEmitter<string>();

  navSelect(feature: string) {
    this.navSelected.emit(feature);
  }
  constructor() { }

  ngOnInit() {
  }

}

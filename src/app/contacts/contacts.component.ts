import { Component, OnInit } from '@angular/core';

@Component({
// tslint:disable-next-line:component-selector
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    // tslint:disable-next-line:no-inferrable-types
    showHide: boolean;
    showHide2: boolean;
    showHide3: boolean;
  constructor() {
    this.showHide = false;
    this.showHide2 = false;
    this.showHide3 = false;
  }
      changeShow() {
        this.showHide = !this.showHide;
      }
      changeShow2() {
        this.showHide2 = !this.showHide2;
      }
      changeShow3() {
        this.showHide3 = !this.showHide3;
      }



  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
// tslint:disable-next-line:component-selector
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  avatar1: string;
  constructor() {
    this.avatar1 = '../../assets/images/myselfcropped.png';
  }

  ngOnInit() {
  }

}

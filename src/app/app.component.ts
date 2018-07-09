import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:no-inferrable-types
  loadedFeature: string = 'home';
  background: string;
  title = 'app';

  constructor() {
    this.background = 'http://www.kensmithbasses.com/wp-content/uploads/2015/12/Grey-Radial-Gradient-Background-10.jpg';
  }
  navigate(feature: string) {
    console.log('set new feature', feature);
    this.loadedFeature = feature;
  }
}

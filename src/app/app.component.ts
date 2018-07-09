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
    this.background = 'https://awllpaper.com/wp-content/uploads/2018/04/wallpaper-website-373691.jpg';
  }
  navigate(feature: string) {
    console.log('set new feature', feature);
    this.loadedFeature = feature;
  }
}

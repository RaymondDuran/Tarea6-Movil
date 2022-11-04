import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Genero', url: '/genero', icon: 'male-female' },
    { title: 'Edad', url: '/edad', icon: 'body' },
    { title: 'Clima', url: '/clima', icon: 'sunny' },
    { title: 'Universidad', url: '/universidad', icon: 'school' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'information' },
  ];
}

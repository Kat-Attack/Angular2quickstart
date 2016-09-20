import { Component } from '@angular/core';

@Component({ //decorator
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
 ` //routerLink creates a link where if clicked, goes to /heroes webpage. The code for it will appear under router-outlet
})

export class AppComponent {
  title = 'Tour of Heroes';
}

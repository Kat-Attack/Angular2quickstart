import { NgModule }      from '@angular/core';
//imports browser module since this is a web application that runs in a browser
import { BrowserModule } from '@angular/platform-browser';
//imports module to help with forms and two way binding (ngModel)
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { routing }             from './app.routing';
import { DashboardComponent }  from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent 
  ]
})

export class AppModule { }

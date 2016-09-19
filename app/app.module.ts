import { NgModule }      from '@angular/core';

//imports browser module since this is a web application that runs in a browser
import { BrowserModule } from '@angular/platform-browser';

//imports module to help with forms and two way binding (ngModel)
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [
    AppComponent 
  ]
})
export class AppModule { }

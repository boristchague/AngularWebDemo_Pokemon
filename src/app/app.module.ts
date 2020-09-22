import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BorderCardDirective } from './border-card.directive';
  
import { AppComponent }  from './app.component';
  
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , BorderCardDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
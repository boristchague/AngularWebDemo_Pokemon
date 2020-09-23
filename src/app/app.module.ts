import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
  
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import {EditPokemonComponent} from './edit-pokemon.component';
import {PokemonFormComponent} from './pokemon-form.component';

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
  
@NgModule({
    imports: [
      BrowserModule, 
      AppRoutingModule,
      FormsModule
    ],
    declarations: [
        AppComponent,
        BorderCardDirective,
        EditPokemonComponent,
        PokemonTypeColorPipe,
        ListPokemonComponent, 
        PokemonFormComponent,
        DetailPokemonComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
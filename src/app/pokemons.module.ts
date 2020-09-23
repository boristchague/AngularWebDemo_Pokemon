import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule} from './pokemons-routing.module';
import { FormsModule } from '@angular/forms';
  

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonFormComponent,
        EditPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: []
})
export class PokemonsModule { }
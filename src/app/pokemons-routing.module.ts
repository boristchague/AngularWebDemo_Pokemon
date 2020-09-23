import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { ListPokemonComponent }    from './list-pokemon.component';
import { DetailPokemonComponent }  from './detail-pokemon.component';
import {EditPokemonComponent} from './edit-pokemon.component'
  
// les routes du module Pokémon
const pokemonsRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: 'pokemon/edit/:id', component: EditPokemonComponent },
];
  
@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }
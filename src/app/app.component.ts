import { Component, HostListener, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';


  
@Component({
  selector: 'pokemon-app',
  templateUrl: '../app.component.html'
})
export class AppComponent implements OnInit {
  
    private title: String = "liste des pokemones";
    private value: String = '';
    private age = 20;
  pokemons: Pokemon[] = null;
  
  ngOnInit() {

    this.pokemons = POKEMONS;
  }
  
  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.name);
  }
    
  onClick(){
      console.log("Vous avez cliquez ! ");
  }

  onKey(event: any){
      this.value = "Bonjour" + event.target.value;
  }


}
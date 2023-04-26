import { Component } from '@angular/core';
import {Game} from "../shared/model/game";
import {find, findIndex} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_crud';
  game: Game;
  games: Array<Game>;

  constructor() {
    this.game = new Game();
    this.games = new Array<Game>();

    this.games = [
      new Game('Fallout New Vegas', 2010, 'Obsidian', 'Narrative Open-World Single-player RPG'),
      new Game('The Elder Scrolls V: Skyrim ', 2011, 'Bethesda', 'Open-World Single-player RPG'),
      new Game('Counter-Strike: Global Offensive', 2012, 'Valve Software', 'Competitive First Person Shooter')
    ]
  }

  insertGameOnList(){
    if (this.game.name.valueOf() == "" ) {
      alert("Por favor, preencher campo Titulo");
    } else if (this.game.year.valueOf() ==  0 || "") {
      if (this.game.year == 0) {
        alert("Eu tenho CERTEZA que este título não foi lançado no ano 0, por favor, corrija o ano de lançamento e tente novamente.");
      }
    } else if (this.game.publisher.valueOf() == "" ) {
      alert("Por favor, preencher campo Publisher");
    } else if (this.game.description.valueOf() == "" ) {
      alert("Por favor, preencher campo Descrição");
    }


    else {
      this.games.push(this.game);
      this.game = new Game();
    }

    console.log(this.games)
  }

  removeGameFromList(toRemoveTitle: Game){
    const itemToRemoveById = this.games.findIndex((game) => game.id === toRemoveTitle.id);
    this.games.splice(itemToRemoveById, 1);
  }

  updateGameOnList(toUpdateGame: Game) {
    // To-Do
  }

  protected readonly alert = alert;
}

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

    this.games = []
  }

  insertGameOnList(){
    this.games.push(this.game);
    this.game = new Game();

    console.log("Deu certo amigo: ", this.games, this.games.length)
  }

  removeGameFromList(toRemoveTitle: Game){
    const itemToRemoveById = this.games.findIndex((game) => game.id === toRemoveTitle.id);
    this.games.splice(itemToRemoveById, 1);
  }

  updateGameOnList(toUpdateGame: Game) {
    // To-Do
  }
}

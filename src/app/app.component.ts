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
    this.games.push(this.game);
    this.game = new Game();
  }

  removeGameFromList(toRemoveTitle: Game){
    const itemToRemoveById = this.games.findIndex((game) => game.id === toRemoveTitle.id);
    this.games.splice(itemToRemoveById, 1);
  }

  updateGameOnList(toUpdateGame: Game) {
    // To-Do
  }
}

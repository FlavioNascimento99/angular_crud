export class Game {
  public static lastId = 0;
  public id: number;
  constructor(
    public name: string = "",
    public year: number = 1999,
    public publisher: string = "",
    public description: string = "",
  ) {
    Game.lastId++;
    this.id = Game.lastId;
  }
}

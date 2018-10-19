export class Campaign {
  public _id: string;
  public name: string;
  public dungeonMaster: string;
  public players: string[];

  public constructor(id, name, dm, players) {
    this._id = id;
    this.name = name;
    this.dungeonMaster = dm;
    this.players = players;
  }
}

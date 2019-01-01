import { User } from './user';

export class Campaign {
  public _id: string;
  public name: string;
  public dungeonMaster: User;
  public players: User[];
  public pendingPlayers: User[];

  public constructor(id, name, dm, players, pendingPlayers) {
    this._id = id;
    this.name = name;
    this.dungeonMaster = dm;
    this.players = players;
    this.pendingPlayers = pendingPlayers;
  }
}

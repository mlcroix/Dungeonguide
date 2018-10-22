export class Note {
  public _id: string;
  public campaignId: string;
  public playerId: string;
  public name: string;
  public date: Date;
  public sharedPlayers: string[];
  public text: string;

  public constructor(id, campaignId, playerId, name, date, sharedPlayers, text) {
    this._id = id;
    this.campaignId = campaignId;
    this.playerId = playerId;
    this.name = name;
    this.date = date;
    this.sharedPlayers = sharedPlayers;
    this.text = text;
  }
}

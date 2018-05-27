export class SessionItem {
    public _id: string;
    public campaignId: string;
    public name: string;
    public date: Date;
    public text: string;

    public constructor() {
        this._id = null;
        this.name = '';
        this.date = null;
        this.text = '';
    }
}

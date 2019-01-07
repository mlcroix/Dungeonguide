export class Session {
    public _id: string;
    public campaignId: string;
    public name: string;
    public date: Date;
    public text: string;

    public constructor() {
        this._id = null;
        this.name = 'new';
        this.date = new Date();
        this.text = 'edit me';
    }
}

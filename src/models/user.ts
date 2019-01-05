export class User {
    public _id: string;
    public firstname: string;
    public surname: string;
    public username: string;
    public email: string;

    public constructor(id, firstname, surname, username, email) {
      this._id = id;
      this.firstname = firstname;
      this.surname = surname;
      this.username = username;
      this.email = email;
    }
}

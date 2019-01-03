import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable()
export class AuthService {
    private url = 'https://dungeonguidev2.herokuapp.com/players/';
    // private url = 'http://localhost:3000/players/';

  public constructor(private http: Http) { }

  public Login(data): Promise<User> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url + 'login', data, options).toPromise()
    .then(response => response.json() as User)
    .catch(error => {
      throw new Error(error.json().message);
    });
  }

  public SignUp(data) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url + 'signup', data, options).toPromise()
    .then(response => response)
    .catch(error => {
      throw new Error(error.json().message);
    });
  }
}

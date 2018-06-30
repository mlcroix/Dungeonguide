import { LocalStorageService } from '../app/app.localStorageService';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable()
export class AuthService {
    private url = 'https://dungeonguide.herokuapp.com/players/';

  public constructor(private http: Http) {
  }

  public Login(data) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    var login = this.http.post(this.url + 'login',{username: "bobo",password: "jcbhkjcbak"}, options).toPromise()
    .then(response => this.loginCallback(response.json()))
    .catch(error => {
      throw new Error(error.json().message);
    });
  }

  private loginCallback(response) {
      console.log(response);
  }
}
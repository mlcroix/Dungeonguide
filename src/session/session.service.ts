import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { SessionItem } from '../models/session-item';
import { Observable } from 'rxjs';

@Injectable()
export class SessionService {
  private url = 'https://dungeonguide.herokuapp.com/sessions/';

  public constructor(private http: Http) {
  }

 public getSessions(): Promise<SessionItem[]> {
  return this.http.get(this.url)
    .toPromise()
    .then(response => response.json() as SessionItem[])
    .catch(error => {
      throw new Error(error.json().message);
    });
}
}

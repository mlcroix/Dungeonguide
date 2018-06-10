import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
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

public createSessions(campaignId): Promise<SessionItem> {
  return this.http.get(this.url + campaignId + '/create')
    .toPromise()
    .then(response => response.json() as SessionItem)
    .catch(error => {
      throw new Error(error.json().message);
    });
}

public removeSession(item) {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({ headers: headers });
  return this.http.post(this.url + 'remove', item, options).toPromise()
  .then(response => response.json())
  .catch(error => {
    throw new Error(error.json().message);
  });
}

}

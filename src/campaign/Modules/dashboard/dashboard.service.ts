import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import * as io from 'socket.io-client';


@Injectable()
export class DashboardService {
  private url = 'https://dungeonguidev2.herokuapp.com/';
  private WSurl = 'http://127.0.0.1:3000';
  private connection;

  public constructor(private http: Http) {
  }

}

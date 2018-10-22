import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NotesService {
  private url = 'https://dungeonguide.herokuapp.com/sessions/';

  public constructor(private http: Http) {
  }
}

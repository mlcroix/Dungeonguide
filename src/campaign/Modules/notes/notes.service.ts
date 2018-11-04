import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import * as io from 'socket.io-client';
import { Note } from '../../../models/note';


@Injectable()
export class NotesService {
  private url = 'https://dungeonguidev2.herokuapp.com/notes/';
  private WSurl = 'http://127.0.0.1:3000';
  private myNotesSubscription: Subscription;
  private sharedNotesSubscription: Subscription;
  private connection;

  public constructor(private http: Http) {
  }

    public get myNotes() {
      const observable = new Observable(observer => {
        this.connection = io(this.WSurl + '/notes');
        this.connection.on('myNotes', (data) => {
          console.log('Received message from Websocket Server ' + data);
          observer.next(data);
        });
        return () => {
            this.connection.disconnect();
        };
      });
      return observable;
    }

    public createNote(campaignId, playerId): Promise<Note> {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      const dataObject = {
        campaignId: campaignId,
        playerId: playerId
      };
      const data = JSON.stringify(dataObject);

      return this.http.post(this.WSurl + '/notes/create', data, options).toPromise()
        .then(response => response.json() as Note)
        .catch(error => {
        throw new Error(error);
      });
    }

    public getNotes(campaignId, playerId) {
      this.connection.emit('get-notes', campaignId, playerId);
    }
}

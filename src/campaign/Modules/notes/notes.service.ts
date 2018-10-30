import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocketIoModule, SocketIoConfig, Socket} from 'ng6-socket-io';


@Injectable()
export class NotesService {
  private url = 'https://dungeonguide.herokuapp.com/notes/';
  private myNotesSubscription: Subscription;
  private sharedNotesSubscription: Subscription;
  private connection;

  public constructor(private http: Http, private socket: Socket) {
  }

  /*
  public get myNotes() {
    const observer = this.http.get(this.url).pipe(map((res: any) => res.json()));
    return observer;
  }
  */

    public get myNotes(): Observable<any> {
      const observable = new Observable(observer => {
        this.connection = io(this.url);
        this.connection.on('start', (data) => {
          observer.next(data); });
        return () => {
            this.connection.disconnect();
        };
      });
      return observable;
    }

    getNotes() {
      return this.socket
          .fromEvent<any>("message")
          .map(data => data.msg );
  }
}

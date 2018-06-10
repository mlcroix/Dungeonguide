import { Component, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { SessionItem } from '../models/session-item';
import { SessionService } from './session.service';
import { Observable, Subscription } from 'rxjs';


@Component({
    selector: 'app-session-selector',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.scss']
})

export class SessionComponent {
    title = 'Session';
    loaded = false;
    SelectedItem = null;
    public sessions: SessionItem[];

    constructor(private sessionService: SessionService) {
      this.sessionService.getSessions().then((result) => {
        this.sessions = result;

        if (this.sessions.length > 0) {
          this.SelectStory(this.sessions[0]);
        }

        this.loaded = true;
        console.log(this.loaded);
      });
    }

    public SelectStory(sessionitem) {
        this.SelectedItem = sessionitem;
        console.log(this.SelectedItem);
    }

    public AddStory() {
      this.sessionService.createSessions('5b018b0760b4261e1badbfe7').then((result) => {
        this.sessions.push(result);
        this.SelectedItem = result;
      });
    }

    public RemoveStory() {
      this.sessionService.removeSession(this.SelectedItem).then((result ) => {
        console.log(result);
        if (result.deleted) {
          this.removeItemFromArray(this.SelectedItem, this.sessions);
          if (this.sessions.length > 0) {
            this.SelectedItem = this.sessions[0];
          } else {
            this.SelectedItem = null;
          }
        }
      });
    }

    private removeItemFromArray(item, array) {
      for (let i = 0; i < array.length; i++) {
        if (item === array[i]) {
          array.splice(i, 1);
          return i;
        }
      }
    }
}

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
    SelectedItem = null;
    public sessions: SessionItem[];

    constructor(private sessionService: SessionService) {
      this.sessionService.getSessions().then((result) => {
        this.sessions = result;

        if (this.sessions.length > 0) {
          this.SelectStory(this.sessions[0]);
        }
      });
    }

    public SelectStory(sessionitem) {
        this.SelectedItem = sessionitem;
    }

    public AddStory() {
      this.sessionService.createSessions('5b018b0760b4261e1badbfe7').then((result) => {
        this.sessions.push(result);
        this.SelectedItem = result;
      });
    }
}

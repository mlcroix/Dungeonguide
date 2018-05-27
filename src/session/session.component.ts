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
        console.log(this.sessions);
      });
    }

    public SelectStory(sessionitem) {
        this.SelectedItem = sessionitem;
    }
}

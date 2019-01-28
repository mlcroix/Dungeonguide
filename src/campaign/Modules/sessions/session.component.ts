import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../../../models/session';
import { SessionService } from './session.service';
import { Observable, Subscription } from 'rxjs';
import { LocalStorageService } from '../../../app/app.localStorageService';
import { Campaign } from '../../../models/campaign';
import { User } from '../../../models/user';


@Component({
    selector: 'app-session-selector',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.scss']
})

export class SessionComponent implements OnInit {
    @Input() campaign: Campaign;
    @Input() user: User;
    localStorage: LocalStorageService;
    sessionService: SessionService;
    loaded = false;
    loggedIn = false;
    SelectedItem = null;
    sessions = [];
    sessionType = 'sessions';
    today = new Date;

    ngOnInit() {
      if (this.user) {
        this.loggedIn = true;
        if (this.campaign) {
          this.service.getSessions(this.campaign._id).then((result) => {
            this.sessions = result;

            if (this.sessions.length > 0) {
              this.SelectedItem(this.sessions[0]);
            }

            this.loaded = true;

            const sess3 = new Session;
            sess3.date = new Date((new Date()).setDate(this.today.getDate() + 7));
            sess3.name = 'next week';
            this.sessions.push(sess3);
            const sess = new Session;
            sess.date = this.today;
            sess.name = 'today';
            this.sessions.push(sess);
            const sess2 = new Session;
            sess2.date = new Date((new Date()).setDate(this.today.getDate() - 7));
            sess2.name = 'last week';
            this.sessions.push(sess2);
            console.log(this.sessions);

            this.sessions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
          });
        }
      }
    }

    constructor(private service: SessionService) {
      this.localStorage = new LocalStorageService();
      this.sessionService = service;
    }

    public selectSession(session) {
      this.SelectedItem = session;
    }

    public isSelected(session) {
      if (session === this.SelectedItem) {
        return true;
      }

      return false;
    }

    /*

    public AddStory() {
      this.sessionService.createSessions('5b018b0760b4261e1badbfe7').then((result) => {
        this.sessions.push(result);
        this.SelectedItem = result;
      });
    }

    public RemoveStory() {
      this.sessionService.removeSession(this.SelectedItem).then((result ) => {
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
    */
}

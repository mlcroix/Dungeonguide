import { Component } from '@angular/core';
import { SessionItem } from '../models/session-item';

@Component({
    selector: 'session-selector',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.scss']
})

export class SessionComponent {
    title = 'Session';
    SelectedItem = null;
    SessionItems = [];
    
    constructor() {
        var SessionItem1 = new SessionItem();
        SessionItem1._id = 0;
        SessionItem1.name = "story 1";
        SessionItem1.date = new Date();
        SessionItem1.text = "lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.";

        var SessionItem2 = new SessionItem();
        SessionItem2._id = 1;
        SessionItem2.name = "story 2";
        SessionItem2.date = new Date();
        SessionItem2.text = "was er een konijntje genaamd knoffelstaart.";

        this.SessionItems.push(SessionItem1);
        this.SessionItems.push(SessionItem2);
        this.SelectedItem = SessionItem1;  
    }  

    public SelectStory(sessionitem) {
        this.SelectedItem = sessionitem;
    }
}
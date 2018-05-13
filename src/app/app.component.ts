import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Dungeon guide';
    authenticated: boolean;



    public constructor(private router : Router) {
        this.authenticated = false;
    }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './app.localStorageService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    localStorageService: LocalStorageService;
    title = 'Dungeon guide';
    loggedIn = false;

    public constructor(private router: Router) {
      this.localStorageService = new LocalStorageService();

      if (this.localStorageService.getItem('user')) {
        this.loggedIn = true;
      }
    }
}

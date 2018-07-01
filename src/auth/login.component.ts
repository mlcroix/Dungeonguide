import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { LocalStorageService } from '../app/app.localStorageService';

@Component({
    selector: 'app-login-selector',
    templateUrl: './login.component.html',
    styleUrls: ['./auth.scss']
})

export class LoginComponent {
    localStorage: LocalStorageService;
    title = 'Login';
    loggedIn = false;

    constructor(private authSerive: AuthService) {
      this.localStorage = new LocalStorageService();

      if (this.localStorage.getItem('user')) {
        this.loggedIn = true;
      }

      console.log(this.loggedIn);
    }

    public login(f: NgForm) {
        this.authSerive.Login(f).then((result) => {
          this.localStorage.setItem('user', JSON.stringify(result));
          this.loggedIn = true;
          window.location.reload();
        });
    }

    public logout() {
      this.localStorage.removeAllItems();
      this.loggedIn = false;
      window.location.reload();
    }
}

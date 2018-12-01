import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { LocalStorageService } from '../app/app.localStorageService';

@Component({
    selector: 'app-signup-selector',
    templateUrl: './signUp.component.html',
    styleUrls: ['./auth.scss']
})

export class SignUpComponent {
  localStorage: LocalStorageService;
  authService: AuthService;
    title = 'Sign up';
    loggedIn = false;



    constructor(private Service: AuthService) {
      this.localStorage = new LocalStorageService();
      this.authService = Service;
    }


    public login(signup: NgForm) {

      console.log(signup);
      this.authService.SignUp(signup).then((result) => {
        this.localStorage.setItem('user', JSON.stringify(result));
        window.location.reload();
      });
  }
}

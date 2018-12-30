import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { LocalStorageService } from '../app/app.localStorageService';
import { FormGroup, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-signup-selector',
    templateUrl: './signUp.component.html',
    styleUrls: ['./auth.scss']
})

export class SignUpComponent {
  localStorage: LocalStorageService;
  authService: AuthService;
  title = 'Sign up';
  signupForm: FormGroup;

  constructor(private Service: AuthService, public snackBar: MatSnackBar) {
    this.localStorage = new LocalStorageService();
    this.authService = Service;

    this.signupForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      password2: new FormControl()
    });
  }


  public signUp(signup: NgForm) {
    this.authService.SignUp(signup).then((result) => {
      const message = result.json().message;

      if (result.status === 200) {
        this.localStorage.setItem('user', JSON.stringify(result));
        window.location.reload();
      } else {
        this.snackBar.open(message, '', {
          duration: 5000,
          panelClass: ['snack-bar']
        });
      }
    });
  }

  public isValid() {
    let valid = true;

    if (!this.checkPasswords()) {
      valid = false;
    }

    return valid;
  }

  public checkPasswords() {
    const pass1 = this.signupForm.get('password').value;
    const pass2 = this.signupForm.get('password2').value;

    if (pass1 === pass2) {
      return true;
    }

    return false;
  }
}

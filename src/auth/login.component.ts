import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AuthService } from './auth.service';
import { LocalStorageService } from '../app/app.localStorageService';
import { SignUpComponent } from './signUp.component';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-login-selector',
    templateUrl: './login.component.html',
    styleUrls: ['./auth.scss']
})

export class LoginComponent {
    localStorage: LocalStorageService;
    title = 'Login';
    loggedIn = false;

    constructor(private authService: AuthService, public dialog: MatDialog, public snackBar: MatSnackBar) {
      this.localStorage = new LocalStorageService();

      if (this.localStorage.getItem('user')) {
        this.loggedIn = true;
      }
    }

    public login(f: NgForm) {
        this.authService.Login(f).then((result) => {
          if (result.status === 200) {
            this.localStorage.setItem('user', JSON.stringify(result.json()));
            this.loggedIn = true;
            window.location.reload();
          } else if (result.status === 201) {
            this.openSnackbar('Incorrect username or password.');
          } else {
            this.openSnackbar('Unable to Login.');
          }
        });
    }

    public logout() {
      this.localStorage.removeAllItems();
      this.loggedIn = false;
      window.location.reload();
    }

    public openDialog(): void {
      const dialogRef = this.dialog.open(SignUpComponent, {});
    }

    public openSnackbar(message) {
      this.snackBar.open(message, '', {
        duration: 5000,
        panelClass: ['snack-bar']
      });
    }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-login-selector',
    templateUrl: './login.component.html',
    styleUrls: ['./auth.scss']
})

export class LoginComponent {
    title = 'Login';

    constructor(private authSerive: AuthService) { }

    public login(f: NgForm) {
        let json = JSON.stringify(f);
        console.log(json);
        this.authSerive.Login(f);
    }
}

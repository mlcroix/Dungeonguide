import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-login-selector',
    templateUrl: './login.component.html',
    styleUrls: ['./auth.scss']
})

export class LoginComponent {
    title = 'Login';

    public login(f: NgForm) {
        console.log("meep");
        console.log(f.value);
    }
}

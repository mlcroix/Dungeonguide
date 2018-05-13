import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signUp.component';

@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent
    ],
    imports: [

    ],
    exports: [
        LoginComponent,
        SignUpComponent
    ],
    providers: [

    ]
})
export class AuthModule { }

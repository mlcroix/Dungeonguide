import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signUp.component';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app/app.material.module';
import { LocalStorageService } from '../app/app.localStorageService';


@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent
    ],
    imports: [
        FormsModule,
        AppMaterialModule,
    ],
    exports: [
        LoginComponent,
        SignUpComponent
    ],
    providers: [
        AuthService,
        LocalStorageService,
    ]
})
export class AuthModule { }

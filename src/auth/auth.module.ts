import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signUp.component';
import { AppMaterialModule } from '../app/app.material.module';
import { LocalStorageService } from '../app/app.localStorageService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent
    ],
    imports: [
        FormsModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        LoginComponent,
        SignUpComponent,
        ReactiveFormsModule,
    ],
    providers: [
        AuthService,
        LocalStorageService,
    ],
    entryComponents: [
      LoginComponent,
      SignUpComponent
    ]
})
export class AuthModule { }

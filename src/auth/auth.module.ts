import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signUp.component';
import { FormsModule }   from '@angular/forms';
import { AppMaterialModule } from '../app/app.material.module';

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

    ]
})
export class AuthModule { }

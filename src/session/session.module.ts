import { NgModule } from '@angular/core';
import { SessionComponent } from './session.component';
import { AppMaterialModule } from '../app/app.material.module';

@NgModule({
    declarations: [
        SessionComponent,
    ],
    imports: [
        AppMaterialModule,
    ],
    exports: [
        SessionComponent,
    ],
    providers: [

    ]
})
export class SessionModule { }
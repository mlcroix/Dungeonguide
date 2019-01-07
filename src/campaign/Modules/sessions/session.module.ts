import { NgModule } from '@angular/core';
import { SessionComponent } from './session.component';
import { AppMaterialModule } from '../../../app/app.material.module';
import { SessionService } from './session.service';

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
      SessionService,
    ]
})
export class SessionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { SessionComponent } from './session.component';

import { AppMaterialModule } from '../app/app.material.module';

import { SessionService } from './session.service';

@NgModule({
    declarations: [
        SessionComponent,
    ],
    imports: [
        HttpModule,
        HttpClientModule,
        AppMaterialModule,
        CommonModule,
    ],
    exports: [
        SessionComponent,
    ],
    providers: [
      SessionService,
    ]
})
export class SessionModule { }

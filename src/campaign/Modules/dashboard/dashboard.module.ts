import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { AppMaterialModule } from '../../../app/app.material.module';
import { DashboardService } from './dashboard.service';

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        HttpModule,
        HttpClientModule,
        AppMaterialModule,
        CommonModule,
    ],
    exports: [
        DashboardComponent,
    ],
    providers: [
      DashboardService,
    ]
})
export class NotesModule { }

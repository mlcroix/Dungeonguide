import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { AppMaterialModule } from '../app/app.material.module';

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        AppMaterialModule,
    ],
    exports: [
        DashboardComponent,
    ],
    providers: [

    ]
})
export class DashboardModule { }
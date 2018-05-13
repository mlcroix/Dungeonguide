import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';
import { AppMaterialModule } from '../app/app.material.module';

@NgModule({
    declarations: [
        HistoryComponent,
    ],
    imports: [
        AppMaterialModule,
    ],
    exports: [
        HistoryComponent,
    ],
    providers: [

    ]
})
export class HistoryModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { NotesComponent } from './notes.component';
import { AppMaterialModule } from '../../../app/app.material.module';
import { NotesService } from './notes.service';

@NgModule({
    declarations: [
        NotesComponent,
    ],
    imports: [
        HttpModule,
        HttpClientModule,
        AppMaterialModule,
        CommonModule,
    ],
    exports: [
        NotesComponent,
    ],
    providers: [
      NotesService,
    ]
})
export class NotesModule { }

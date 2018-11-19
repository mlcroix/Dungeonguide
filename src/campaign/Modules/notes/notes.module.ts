import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxEditorModule } from 'ngx-editor';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NotesComponent } from './notes.component';
import { AppMaterialModule } from '../../../app/app.material.module';
import { FormsModule } from '@angular/forms';
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
        FormsModule,
        NgxEditorModule,
        TooltipModule,
    ],
    exports: [
        NotesComponent,
    ],
    providers: [
      NotesService,
    ],
    entryComponents: [
      NotesComponent,
    ]

})
export class NotesModule { }

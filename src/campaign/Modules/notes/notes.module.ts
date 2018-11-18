import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxEditorModule } from 'ngx-editor';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NotesComponent, NotesDialogComponent } from './notes.component';
import { AppMaterialModule } from '../../../app/app.material.module';
import { FormsModule } from '@angular/forms';
import { NotesService } from './notes.service';

@NgModule({
    declarations: [
        NotesComponent,
        NotesDialogComponent,
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
        NotesDialogComponent,
    ],
    providers: [
      NotesService,
    ],
    entryComponents: [
      NotesComponent,
      NotesDialogComponent
    ]

})
export class NotesModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CampaignComponent } from './campaign.component';
import { CampaignsComponent } from './campaigns.component';
import { OptionsComponent } from './Modules/options/options.component';
import { CampaignService } from './campaign.service';
import { AppMaterialModule } from '../app/app.material.module';
import { LocalStorageService } from '../app/app.localStorageService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesModule } from './Modules/notes/notes.module';
import { SessionModule } from './Modules/sessions/session.module';
@NgModule({
    declarations: [
        CampaignComponent,
        CampaignsComponent,
        OptionsComponent,
    ],
    imports: [
        FormsModule,
        AppMaterialModule,
        RouterModule,
        NotesModule,
        FormsModule,
        ReactiveFormsModule,
        SessionModule,
    ],
    exports: [
        CampaignComponent,
        CampaignsComponent,
        OptionsComponent,
        ReactiveFormsModule,
    ],
    providers: [
        CampaignService,
        LocalStorageService,
    ],
    entryComponents: [
      OptionsComponent,
    ]
})
export class CampaignModule { }

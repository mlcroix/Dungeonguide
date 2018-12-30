import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CampaignComponent } from './campaign.component';
import { CampaignsComponent } from './campaigns.component';
import { OptionsComponent } from './Modules/options/options.component';
import { CampaignService } from './campaign.service';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app/app.material.module';
import { LocalStorageService } from '../app/app.localStorageService';

import { NotesModule } from './Modules/notes/notes.module';


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
    ],
    exports: [
        CampaignComponent,
        CampaignsComponent,
        OptionsComponent,
    ],
    providers: [
        CampaignService,
        LocalStorageService,
    ],
    entryComponents: [
      OptionsComponent
    ]
})
export class CampaignModule { }

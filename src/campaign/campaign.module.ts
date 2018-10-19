import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CampaignComponent } from './campaign.component';
import { CampaignsComponent } from './campaigns.component';
import { CampaignService } from './campaign.service';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app/app.material.module';
import { LocalStorageService } from '../app/app.localStorageService';


@NgModule({
    declarations: [
        CampaignComponent,
        CampaignsComponent,
    ],
    imports: [
        FormsModule,
        AppMaterialModule,
        RouterModule,
    ],
    exports: [
        CampaignComponent,
        CampaignsComponent,
    ],
    providers: [
        CampaignService,
        LocalStorageService,
    ]
})
export class CampaignModule { }
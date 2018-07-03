import { NgModule } from '@angular/core';
import { CampaignComponent } from './campaign.component';
import { CampaignService } from './campaign.service';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app/app.material.module';
import { LocalStorageService } from '../app/app.localStorageService';


@NgModule({
    declarations: [
        CampaignComponent,
    ],
    imports: [
        FormsModule,
        AppMaterialModule,
    ],
    exports: [
        CampaignComponent,
    ],
    providers: [
        CampaignService,
        LocalStorageService,
    ]
})
export class CampaignModule { }

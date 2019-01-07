import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login.component';
import { CampaignsComponent } from '../campaign/campaigns.component';
import { CampaignComponent } from '../campaign/campaign.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'campaigns', component: CampaignsComponent },
    { path: 'campaign/:id', component: CampaignComponent },
    { path: 'campaign/:id/:state', component: CampaignComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

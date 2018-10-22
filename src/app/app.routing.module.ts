import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login.component';
import { SignUpComponent } from '../auth/signUp.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SessionComponent } from '../campaign/modules/session/session.component';
import { CampaignsComponent } from '../campaign/campaigns.component';
import { CampaignComponent } from '../campaign/campaign.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'campaigns', component: CampaignsComponent },
    { path: 'campaign/:id', component: CampaignComponent },
    { path: 'campaign/:id/:state', component: CampaignComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

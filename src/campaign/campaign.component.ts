import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { CampaignService } from './campaign.service';
import { LocalStorageService } from '../app/app.localStorageService';

@Component({
  selector: 'app-campaign-selector',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.scss']
})

export class CampaignComponent {
  localStorage: LocalStorageService;
  loggedIn = false;
  SelectedCampaign = "select a campaign";
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private campaignServicee: CampaignService) {
    this.localStorage = new LocalStorageService();

    if (this.localStorage.getItem('user')) {
      this.loggedIn = true;
    }

    const campaign = localStorage.getItem('campaign');
    if (campaign != null) {
      this.SelectedCampaign = campaign;
    }
  }

  public SelectCampaign(campaignName) {
    console.log(campaignName);
  }


}

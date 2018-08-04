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
  SelectedCampaign = 'select a campaign';
  Campaigns = [];


  constructor(private campaignServicee: CampaignService) {
    this.localStorage = new LocalStorageService();

    if (this.localStorage.getItem('user')) {
      this.loggedIn = true;
    }

    const campaign = localStorage.getItem('campaign');
    if (campaign != null) {
      this.SelectedCampaign = campaign;
    }

    this.Campaigns.push('Een hele lange campagn naam');
    this.Campaigns.push('Item 2');
    this.Campaigns.push('Medium sized item');
    this.Campaigns.push('ve');
  }

  public SelectCampaign(campaignName) {
    this.SelectedCampaign = campaignName;
  }


}

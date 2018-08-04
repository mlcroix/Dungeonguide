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
  SelectedCampaign = null;
  Campaigns = [];


  constructor(private campaignServicee: CampaignService) {
    this.localStorage = new LocalStorageService();

    const user = JSON.parse(this.localStorage.getItem('user'));
    if (user) {
      this.loggedIn = true;
      this.campaignServicee.getCampaigns(user._id).then((result) => {
        this.Campaigns = result;
      });
    }

    const campaign = JSON.parse(localStorage.getItem('campaign'));
    if (campaign != null) {
      this.SelectedCampaign = campaign;
    }
  }

  public SelectCampaign(campaign) {
    this.SelectedCampaign = campaign;
    this.localStorage.setItem('campaign', JSON.stringify(campaign));
  }

  public CreateCampaign() {

    this.campaignServicee.createCampaign(JSON.parse(this.localStorage.getItem('user'))._id).then((result) => {
      if (result) {
        this.Campaigns.push(result);
        console.log(result);
      }
    });
  }


}

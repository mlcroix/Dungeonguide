import { Component, Input, OnInit } from '@angular/core';
import { CampaignService } from './campaign.service';
import { LocalStorageService } from '../app/app.localStorageService';
import { Campaign } from '../models/campaign';

@Component({
  selector: 'app-campaign-selector',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.scss']
})

export class CampaignComponent {
  @Input() campaign: Campaign;
  localStorage: LocalStorageService;
  loggedIn = false;
  SelectedCampaign: Campaign;
  Campaigns = [];

  OnInit() {
    //*this.SelectCampaign = this.campaign;
    console.log(this.campaign);
 }


  public constructor(private campaignService: CampaignService) {
    this.localStorage = new LocalStorageService();



    const user = JSON.parse(this.localStorage.getItem('user'));
    if (user) {
      this.loggedIn = true;
      this.campaignService.getCampaigns(user._id).then((result) => {
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
}

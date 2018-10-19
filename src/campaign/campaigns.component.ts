import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { CampaignService } from './campaign.service';
import { LocalStorageService } from '../app/app.localStorageService';
import { Campaign } from '../models/campaign';

@Component({
  selector: 'app-campaigns-selector',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaign.scss']
})

export class CampaignsComponent {
  localStorage: LocalStorageService;
  loggedIn = false;
  loaded = false;
  SelectedCampaign = null;
  Campaigns = [];


  constructor(private router: Router, private campaignService: CampaignService) {
    this.localStorage = new LocalStorageService();

    const user = JSON.parse(this.localStorage.getItem('user'));
    if (user) {
      this.loggedIn = true;
      this.campaignService.getCampaigns(user._id).then((result) => {
        this.Campaigns = result;
        console.log(this.Campaigns[0].players);
        this.loaded = true;
      });
    }
  }

  public CreateCampaign() {
    this.campaignService.createCampaign(JSON.parse(this.localStorage.getItem('user'))._id).then((result) => {
      if (result) {
        this.Campaigns.push(result);
      }
    });
  }

  public selectCampaign(campaign) {
    this.campaignService.storeCampaign(campaign);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { CampaignService } from './campaign.service';
import { LocalStorageService } from '../app/app.localStorageService';
import { Campaign } from '../models/campaign';
import { User } from '../models/user';

@Component({
  selector: 'app-campaigns-selector',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.scss']
})

export class CampaignsComponent {
  localStorage: LocalStorageService;
  loggedIn = false;
  loaded = false;
  Campaigns = [];
  user: User;


  constructor(private router: Router, private campaignService: CampaignService) {
    this.localStorage = new LocalStorageService();

    const user = JSON.parse(this.localStorage.getItem('user'));
    if (user) {
      this.campaignService.getCampaigns(user._id).then((result) => {
        this.Campaigns = result;
        this.loaded = true;
        this.user = user;
      });
    }
  }

  public createCampaign() {
    this.campaignService.createCampaign(JSON.parse(this.localStorage.getItem('user'))._id).then((result) => {
      if (result) {
        this.Campaigns.push(result);
      }
    });
  }

  public removeCampaign(campaign) {
    this.campaignService.removeCampaign(this.user._id, campaign._id).then((result) => {
      if (result.deleted) {
        const index = this.Campaigns.indexOf(campaign);
        this.Campaigns.splice(index, 1);
      }
    });
  }

  public selectCampaign(campaign) {
    this.campaignService.storeCampaign(campaign);
  }

  public playeridDungeonMaster(campaign) {
    if (campaign.dungeonMaster === this.user._id) {
      return true;
    }
    return false;
  }
}

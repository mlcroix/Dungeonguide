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
        this.loggedIn = true;
      });
    }
  }

  public createCampaign() {
    this.campaignService.createCampaign(JSON.parse(this.localStorage.getItem('user'))._id).then((result) => {
      if (result) {
        this.Campaigns.push(result);
        this.campaignService.storeCampaign(null);
        this.router.navigate(['/campaign/' + result._id]);
      }
    });
  }

  public selectCampaign(campaign) {
    this.campaignService.storeCampaign(campaign);
    this.localStorage.setItem('campaignId', campaign._id);
  }

  public playeridDungeonMaster(campaign) {
    if (campaign.dungeonMaster._id === this.user._id) {
      return true;
    }
    return false;
  }

  public isPendingPlayer(campaign) {
    let result = false;
    campaign.pendingPlayers.forEach(player => {
      if (player.username === this.user.username) {
        result = true;
      }
    });
    return result;
  }

  public pendingCampaign(campaign, action) {
    if (action === 'accept') {
      this.removeItemFromArray(this.user, campaign.pendingPlayers);
      campaign.players.push(this.user);
      this.campaignService.updateCampaign(campaign).then((result) => {});
    } else if (action === 'decline') {
      this.removeItemFromArray(this.user, campaign.pendingPlayers);
      this.campaignService.updateCampaign(campaign).then((result) => {});
      this.removeItemFromArray(campaign, this.Campaigns);
    }
  }

  private removeItemFromArray(item, array) {
    for (let i = 0; i < array.length; i++) {
      if (item._id === array[i]._id) {
        array.splice(i, 1);
        return i;
      }
    }
  }
}

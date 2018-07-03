import { Component } from '@angular/core';
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

  constructor(private campaignServicee: CampaignService) {
    this.localStorage = new LocalStorageService();

    if (this.localStorage.getItem('user')) {
      this.loggedIn = true;
    }
  }


}

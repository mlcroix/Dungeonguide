import { Component, Input, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CampaignService } from './campaign.service';
import { LocalStorageService } from '../app/app.localStorageService';
import { Campaign } from '../models/campaign';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-campaign-selector',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.scss']
})

export class CampaignComponent {

  localStorage: LocalStorageService;
  loggedIn = false;
  loaded = false;
  campaignContainsUser = false;
  campaign: Campaign;

  public constructor(private campaignService: CampaignService, private route: ActivatedRoute,
    private router: Router) {
      this.localStorage = new LocalStorageService();
      const user = JSON.parse(this.localStorage.getItem('user'));
      let campaignId = null;

      this.route.paramMap.subscribe(params => {campaignId = params.get('id'); });

      if (user) {
        this.loggedIn = true;

        if (this.campaignService.getStoredCampaign() != null) {
          this.campaign = this.campaignService.getStoredCampaign();

          if (this.campaign.Players.indexOf(user._id)) {
            this.campaignContainsUser = true;
          }

          this.loaded = true;
        } else {
          this.campaignService.getCampaign(campaignId).then((result) => {
            this.campaign = new Campaign(result[0]._id, result[0].name, result[0].dungeonMaster, result[0].players);

            if (this.campaign.Players.indexOf(user._id)) {
              this.campaignContainsUser = true;
            }

            this.loaded = true;
          });

        }
      }
  }
}

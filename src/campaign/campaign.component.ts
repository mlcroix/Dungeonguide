import { Component, Input, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CampaignService } from './campaign.service';
import { LocalStorageService } from '../app/app.localStorageService';
import { Campaign } from '../models/campaign';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OptionsComponent } from './Modules/options/options.component';
import { User } from '../models/user';
import { getTypeNameForDebugging } from '@angular/common/src/directives/ng_for_of';

@Component({
  selector: 'app-campaign-selector',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.scss']
})

export class CampaignComponent {

  localStorage: LocalStorageService;
  loggedIn = false;
  loaded = false;
  isDM = false;
  campaignContainsUser = false;
  campaign: Campaign;
  state = 'dashboard';

  public constructor(private campaignService: CampaignService, private route: ActivatedRoute,
    private router: Router, public dialog: MatDialog) {
      this.localStorage = new LocalStorageService();
      const user = JSON.parse(this.localStorage.getItem('user'));
      let campaignId = null;

      this.route.paramMap.subscribe(params => {campaignId = params.get('id'); });
      this.route.paramMap.subscribe(params => {
        const stateParameter = params.get('state');
        if (stateParameter != null) {
          this.state = stateParameter;
        }
      });

      if (user) {
        this.loggedIn = true;

        if (this.campaignService.getStoredCampaign() != null) {
          this.campaign = this.campaignService.getStoredCampaign();

          if (this.campaign.players.indexOf(user._id)) {
            this.campaignContainsUser = true;
            if (this.campaign.dungeonMaster._id === user._id) {
              this.isDM = true;
            }
          }

          this.loaded = true;
        } else {
          this.campaignService.getCampaign(campaignId).then((result) => {
            this.campaign = result[0];
            if (this.campaign.players.indexOf(user._id)) {
              this.campaignContainsUser = true;
              this.campaignService.storeCampaign(this.campaign);

              if (this.campaign.dungeonMaster._id === user._id) {
                this.isDM = true;
              }
            }

            this.loaded = true;
          });

        }
      }
  }

  public setState(state) {
    this.state = state;
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(OptionsComponent, { });
  }
}

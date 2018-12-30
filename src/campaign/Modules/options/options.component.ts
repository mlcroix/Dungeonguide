import { Component } from '@angular/core';
import { CampaignService } from '../../campaign.service';
import { Campaign } from '../../../models/campaign';


@Component({
  selector: 'app-options-selector',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})

export class OptionsComponent {
  loaded = false;
  campaign: Campaign;

  public constructor(private campaignService: CampaignService) {
  }
}

import { Component } from '@angular/core';
import { CampaignService } from '../../campaign.service';
import { Campaign } from '../../../models/campaign';
import { User } from '../../../models/user';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-options-selector',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})

export class OptionsComponent {
  loaded = false;
  campaign: Campaign;
  players: User[];

  changeCampaignNameForm: FormGroup;

  public constructor(private campaignService: CampaignService, public snackBar: MatSnackBar) {
    this.campaign = this.campaignService.getStoredCampaign();

    this.changeCampaignNameForm = new FormGroup({
      campaignName: new FormControl(this.campaign.name),
    });
  }

  public changeCampaignName(form: NgForm) {
    const name = this.changeCampaignNameForm.controls.campaignName.value;

    if (name.length < 3) {
      this.openSnackbar('campaign must be atleast 3 characters long');
      console.log(this);
    } else {
      this.campaignService.changeCampaignName(this.campaign._id, name).then((result) => {
        this.openSnackbar(result.message);
      });
    }
  }

  public openSnackbar(message) {
    this.snackBar.open(message, '', {
      duration: 5000,
      panelClass: ['snack-bar']
    });
  }
}

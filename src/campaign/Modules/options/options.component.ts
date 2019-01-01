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
  addPlayerForm: FormGroup;

  public constructor(private campaignService: CampaignService, public snackBar: MatSnackBar) {
    this.campaign = this.campaignService.getStoredCampaign();
    console.log(this.campaign);
    this.changeCampaignNameForm = new FormGroup({
      campaignName: new FormControl(this.campaign.name),
    });
    this.addPlayerForm = new FormGroup({
      playerName: new FormControl(''),
    });
  }

  public changeCampaignName(form: NgForm) {
    const name = this.changeCampaignNameForm.controls.campaignName.value;

    if (name.length < 3) {
      this.openSnackbar('campaign must be atleast 3 characters long');
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

  public addPlayer(form: NgForm) {
    const name = this.addPlayerForm.controls.playerName.value;

    if (name === this.campaign.dungeonMaster.username) {
      this.openSnackbar('You can\'t add yourself to the playerlist.');
    } else if (this.campaignContainsPlayer(this.campaign.players, name)) {
      this.openSnackbar('the player is already in your campaign.');
    } else if (this.campaignContainsPlayer(this.campaign.pendingPlayers, name)) {
      this.openSnackbar('You have already invited this player');
    } else {

      this.campaignService.getPlayer(name).then((result) => {
        if (result.length > 0) {
          this.campaign.pendingPlayers.push(result[0]);
          this.campaignService.updateCampaign(this.campaign).then((res) => {
            this.openSnackbar('added player ' + name + 'to your campaign');
          });
          // gekkehenky2
        } else {
          this.openSnackbar('unable to find the player');
        }
      });
    }
  }

  public removePlayerFromCampaign(list, player) {
    if (list === 'players') {
      this.campaign.players.forEach(element => {
        if (player === element) {
          this.removeItemFromArray(element, this.campaign.players);
        }
      });
    }

    if (list === 'pending') {
      this.campaign.pendingPlayers.forEach(element => {
        if (player === element) {
          this.removeItemFromArray(element, this.campaign.pendingPlayers);
        }
      });
    }

    this.campaignService.updateCampaign(this.campaign).then((result) => {
      this.openSnackbar('player ' + player.username + ' has been removed from the campaign.');
    });
  }

  public campaignContainsPlayer(array, name) {
    let result = false;
      array.forEach(element => {
        if (element.username === name) {
          result = true;
        }
      });
      return result;
  }

  private removeItemFromArray(item, array) {
    for (let i = 0; i < array.length; i++) {
      if (item === array[i]) {
        array.splice(i, 1);
        return i;
      }
    }
  }
}

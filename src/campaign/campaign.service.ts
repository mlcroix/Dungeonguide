import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Campaign } from '../models/campaign';

@Injectable()
export class CampaignService {
  private url = 'https://dungeonguide.herokuapp.com/campaigns';
  private campaign: Campaign;

  public constructor(private http: Http) {
  }

 public getCampaigns(playerid): Promise<Campaign[]> {
  return this.http.get(this.url + '/playerid/' + playerid)
    .toPromise()
    .then(response => response.json() as Campaign[])
    .catch(error => {
      throw new Error(error.json().message);
    });
  }

  public getCampaign(campaignId): Promise<Campaign> {
    return this.http.get(this.url + '/id/' + campaignId)
      .toPromise()
      .then(response => response.json() as Campaign)
      .catch(error => {
    throw new Error(error.json().message);
    });
  }

  public createCampaign(playerId): Promise<Campaign> {
    return this.http.get(this.url + '/' + playerId + '/create')
      .toPromise()
      .then(response => response.json() as Campaign)
      .catch(error => {
        throw new Error(error.json().message);
      });
  }

  public storeCampaign(campaign: Campaign) {
    this.campaign = campaign;
  }

  public getStoredCampaign() {
    return this.campaign;
  }
}

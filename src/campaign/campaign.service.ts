import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Campaign } from '../models/campaign';
import { User } from '../models/user';

@Injectable()
export class CampaignService {
  // private url = 'https://dungeonguide.herokuapp.com/campaigns';
  private url = 'http://localhost:3000/campaigns';
  // private playerUrl = 'https://dungeonguide.herokuapp.com/players/';
  private playerUrl = 'http://localhost:3000/players/';
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

  public removeCampaign(userId, campaignId): Promise<any> {
    const data = { 'campaignId': campaignId, 'userId': userId };
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url + '/remove', data, options).toPromise()
    .then(response => response.json())
    .catch(error => {
      throw new Error(error);
    });
  }

  public storeCampaign(campaign: Campaign) {
    this.campaign = campaign;
  }

  public getStoredCampaign() {
    return this.campaign;
  }

  public changeCampaignName(campaignId, name): Promise<any> {
    const data = { 'campaignId': campaignId, 'name': name };
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url + '/changename', data, options).toPromise()
    .then(response => response.json())
    .catch(error => {
      throw new Error(error);
    });
  }

  public getPlayer(name): Promise<User[]> {
    return this.http.get(this.playerUrl + 'username/' + name)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(error => {
        throw new Error(error.json().message);
      });
  }

  public updateCampaign(campaign) {
    const data = { 'campaign': campaign };
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url + '/update', data, options).toPromise()
    .then(response => response.json())
    .catch(error => {
      throw new Error(error);
    });
  }
}

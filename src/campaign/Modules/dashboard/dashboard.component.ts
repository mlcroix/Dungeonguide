import { Component, EventEmitter, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Observable, Subscription } from 'rxjs';
import { LocalStorageService } from '../../../app/app.localStorageService';
import { User } from '../../../models/user';

@Component({
    selector: 'app-dashboard-selector',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  localStorage: LocalStorageService;
  dashboardService: DashboardService;
  loaded = false;
  user: User;

  constructor(private service: DashboardService) {
    this.localStorage = new LocalStorageService();
    this.dashboardService = service;

    this.user = <User>JSON.parse(this.localStorage.getItem('user'));
    console.log(this.user._id);

    if (this.user) {
        this.loaded = true;
      }
  }

}

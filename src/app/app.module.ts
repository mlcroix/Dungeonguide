import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app.routing.module';
import { AppMaterialModule } from './app.material.module';


import { AuthModule } from '../auth/auth.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SessionModule } from '../session/session.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    DashboardModule,
    SessionModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
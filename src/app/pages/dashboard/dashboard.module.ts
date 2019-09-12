import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';

import { AppRoutingModule } from 'src/app/app.routing.module';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }

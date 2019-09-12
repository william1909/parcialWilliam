import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },{
  
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

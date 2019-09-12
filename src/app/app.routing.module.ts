import { NgModule } from '@angular/core';

import {Routes,RouterModule, Router} from "@angular/router";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';

export const routes: Routes=[{
  path  : '',    
  component : AppComponent
},{
  path: 'pages',
  component: DashboardComponent,
  children: [
      {
          path: '',
          loadChildren:'./pages/dashboard/dashboard.module#DashboardModule'
      }
  ]
}
]
@NgModule({
  imports:[ RouterModule.forRoot(routes,{useHash:true})
  ],
  exports:[RouterModule],
  providers:[]
  }) 

export class AppRoutingModule { }

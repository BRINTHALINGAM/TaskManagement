import { LoginactivityComponent } from './loginactivity/loginactivity.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { ChartComponent } from './chart/chart.component';


const routes: Routes = [
  { path:'loginactivity',component:LoginactivityComponent },
  {path: 'manageaccount', component:ManageaccountComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

 
})
export class AppRoutingModule { }

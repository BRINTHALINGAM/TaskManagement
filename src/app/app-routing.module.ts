import { LoginactivityComponent } from './loginactivity/loginactivity.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { HomeComponent } from './home/home.component';
import { AclSettingsComponent } from './acl-settings/acl-settings.component';
import { ChartComponent } from './chart/chart.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


const routes: Routes = [
  { path : '', component : LoginpageComponent},
  {path:'home',component:HomeComponent},
  { path:'loginactivity',component:LoginactivityComponent },
  {path: 'manageaccount', component:ManageaccountComponent},
  {path:'acl',component:AclSettingsComponent},
  {path:'chart',component:ChartComponent},
  { path: 'task', component: TaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {}

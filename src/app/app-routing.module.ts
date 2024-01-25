import { FormComponent } from './task/form/form.component';
import { LoginactivityComponent } from './loginactivity/loginactivity.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { HomeComponent } from './home/home.component';
import { AclSettingsComponent } from './acl-settings/acl-settings.component';
import { ChartComponent } from './chart/chart.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CreateComponent } from './create/create.component';
import { NotificationComponent } from './Team_C/notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { AuditComponent } from './Team_C/audit/audit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentComponent } from './comment/comment.component';
import { ImageuploaderComponent } from './Team_C/imageuploader/imageuploader.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path : '', component : LoginpageComponent},
  { path: 'manageaccount', component:ManageaccountComponent},
  { path:'loginactivity', component:LoginactivityComponent },
  { path:'acl', component:AclSettingsComponent},
  { path:'chart', component:ChartComponent},
  { path: 'task', component: TaskComponent },
{path:'create',component:CreateComponent},
  { path: 'notification', component:NotificationComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'form', component: FormComponent }, 
  {path:'audit' ,component:AuditComponent},
  { path: 'comment', component: CommentComponent },
  {path:'image' ,component:ImageuploaderComponent},
  {path:'details',component:DetailsComponent},
   {path:'**',component:PageNotFoundComponent} 

>>>>>>> cd361847990fbdc82da9e58c61e17c90ffb0a6e3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

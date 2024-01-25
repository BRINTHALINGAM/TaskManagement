import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdown, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskComponent } from './task/task.component';
import { AclSettingsComponent } from './acl-settings/acl-settings.component';
import { LoginactivityComponent } from './loginactivity/loginactivity.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { ChartComponent } from './chart/chart.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TeamsComponent } from './Team_C/teams/teams.component';
import { NotificationComponent } from './Team_C/notification/notification.component';
import { AuditComponent } from './Team_C/audit/audit.component';
import { BoardsComponent } from './Team_C/boards/boards.component';
import { TimetrackerComponent } from './Team_C/timetracker/timetracker.component';
import { DocumentsComponent } from './Team_C/documents/documents.component';
import { ImageuploaderComponent } from './Team_C/imageuploader/imageuploader.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    AclSettingsComponent,
    LoginactivityComponent,
    ManageaccountComponent,     
     ChartComponent, 
     LoginpageComponent, 
     TeamsComponent, 
     NotificationComponent, 
     AuditComponent, 
     BoardsComponent, 
     TimetrackerComponent, 
     DocumentsComponent, 
     ImageuploaderComponent, DetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

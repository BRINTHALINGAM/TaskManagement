import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdown, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AclSettingsComponent } from './acl-settings/acl-settings.component';
import { LoginactivityComponent } from './loginactivity/loginactivity.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { RoleComponent } from './role/role.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AclSettingsComponent,
    LoginactivityComponent,
    ManageaccountComponent,     
    RoleComponent, ChartComponent
   
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

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdown, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component'; 
import { LoginactivityComponent } from './loginactivity/loginactivity.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginactivityComponent,
    ManageaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

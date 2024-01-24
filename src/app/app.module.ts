import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdown, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { AclSettingsComponent } from './acl-settings/acl-settings.component';
=======
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
>>>>>>> 6d686e4c25c5815cf2bac63036bbcf46c7c90294

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AclSettingsComponent
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

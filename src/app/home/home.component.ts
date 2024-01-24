import { Component } from '@angular/core';
import { faBell, faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey, faPowerOff, faShield } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
faBell=faBell;
faUser=faUser;
faKey=faKey;
faClock=faClock;
faPower=faPowerOff;
faShield=faShield;
}

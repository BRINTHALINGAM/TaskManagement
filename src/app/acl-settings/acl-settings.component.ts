import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-acl-settings',
  templateUrl: './acl-settings.component.html',
  styleUrls: ['./acl-settings.component.css']
})
export class AclSettingsComponent implements OnInit {
  roles = ['SDEV', 'JDEV', 'TL', 'ST'];

  permissions = ['Team', 'Project', 'Task'];
  actions = ['Create', 'Assign', 'View', 'Delete', 'Edit'];
  showAlert: boolean = false;
  roleActionsMap: { [key: string]: { [key: string]: string[] } } = {};
  constructor(private router: Router) {}
  ngOnInit() {
    
    this.roles.forEach(role => {
      this.roleActionsMap[role] = {};
      this.permissions.forEach(permission => {
        this.roleActionsMap[role][permission] = [];
      });
    });
  }

  updateRoleActions(role: string, permission: string, action: string, event: any) {
    if (event.target.checked) {
      this.roleActionsMap[role][permission].push(action);
    } else {
      const index = this.roleActionsMap[role][permission].indexOf(action);
      if (index !== -1) {
        this.roleActionsMap[role][permission].splice(index, 1);
      }
    }
  }

  saveAclData() {
    for (const role of this.roles) {
      for (const permission of this.permissions) {
        const actions = this.roleActionsMap[role][permission].join(', ');
        console.log(`${role}: Permission: ${permission}, Actions: ${actions}`);
      }
    }

    console.log('Acl data saved successfully.');
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
      this.router.navigate(['/home']);
    }, 3000);
    
  }
  
  
  
}

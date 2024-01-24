import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
      // Implement your form submission logic here
      console.log('Form submitted:', this.loginForm.value);
      this.router.navigateByUrl('/home');
    
  }
}

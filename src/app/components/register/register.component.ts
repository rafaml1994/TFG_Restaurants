import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  loginForm;
  invalidEmail: Number = 0;
  invalidPassword: Number = 0;


  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      rpassword: new FormControl()
    });
  }
  onSubmit(data: any) {
    console.log(data);
    if (data.rpassword == data.password && data.password != null && data.rpassword != null) {
      this.authService.register(data)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(err => {
        console.log(err.code);
        switch (err.code) {
          case 'auth/email-already-in-use':
            this.invalidEmail = 1
            this.router.navigate(['/register']);
            this.loginForm.reset()
            break;
          case 'auth/invalid-email':
            this.invalidEmail = 1
            this.router.navigate(['/register']);
            this.loginForm.reset()
            break;
          case 'auth/admin-restricted-operation':
            this.invalidEmail = 2
            this.router.navigate(['/register']);
            this.loginForm.reset()
            break;

            
          default:
            break;
        }
      });
    } else {
      this.invalidPassword = 1;
      this.router.navigate(['/register']);
      this.loginForm.reset()
    } 
    
  }
}
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  loginForm;
  invalidEmail: Number = 0;
  invalidPassword: Number = 0;

  constructor(
    private authService: AuthService,
    private sesionService: SesionService, 
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  logWhitGoogle() {
    this.authService.loginWhitGoogle()
      .then(res => {
        this.router.navigate(['/inicio'])
        let datosString = JSON.stringify(res.user)
        sessionStorage.setItem("session-data", datosString);
        sessionStorage.setItem("session", "true");
        this.sesionService.DatosSesion(sessionStorage.getItem('session')!); 
      })
      .catch(err => {
        console.log(err);
        this.router.navigate(['/login'])
      })
  }
  onSubmit(data: any) {
    this.authService.login(data)
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
        sessionStorage.setItem("email", data.email);
        sessionStorage.setItem("session", "true");
        this.sesionService.DatosSesion(sessionStorage.getItem('session')!); 
        console.log(data);
      })
      .catch(err => {
        console.log(err.code);
        switch (err.code) {
          case 'auth/missing-email':
            this.invalidEmail = 1;
            this.router.navigate(['/login']);
            this.loginForm.reset();
            break;
          case 'auth/wrong-password':
            this.invalidPassword = 1;
            this.router.navigate(['/login']);
            this.loginForm.reset();
            break;
          case 'auth/user-not-found':
            this.invalidEmail = 1;
            this.router.navigate(['/login']);
            this.loginForm.reset();
            break;
          case 'auth/invalid-email':
            this.invalidEmail = 1;
            this.router.navigate(['/login']);
            this.loginForm.reset();
            break;
          default:
            break;
        }
      });
  }
}

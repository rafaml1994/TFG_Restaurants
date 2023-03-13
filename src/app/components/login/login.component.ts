import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loginForm;
  
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router : Router
  ) {
    this.loginForm = new FormGroup({
      email:new FormControl(),
      password: new FormControl(),
    });
  }
  onSubmit(data:any){
    console.log(data);
    this.authService.login(data)
    .then(response =>{
      console.log(response);
    })
    .catch(err => console.log(err));
    this.router.navigate(['/register']);
  }
}

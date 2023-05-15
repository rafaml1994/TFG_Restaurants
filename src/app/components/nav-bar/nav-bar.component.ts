import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SesionService as SessionService } from '../../services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  
  isLoggedIn!: String;

  constructor( private SessionService: SessionService, private router: Router ){
  }
  sub: Subscription = new Subscription();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class. "sessionStorage.getItem('session')"
    
   this.sub = this.SessionService.ObtenerDatosSesion()?.subscribe(
      /*  Devuelve datos  */
      (data) =>{
        if(data == "true"){
          this.isLoggedIn = data;
        }else{
          this.isLoggedIn = "false"
        }
        
      },
      /* Devuelve error  */
      (err)=>{
        console.log(err);
      }); 
  }

  cerrarSesion(){
    sessionStorage.removeItem('session');
    this.SessionService.DatosSesion(sessionStorage.getItem('session')!);
    this.router.navigate(['/login']);
  }
}

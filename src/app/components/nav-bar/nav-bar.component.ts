import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SesionService as SessionService } from '../../services/sesion.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  
  isLoggedIn: boolean = false;

  constructor( private SessionService: SessionService ){
    console.log(sessionStorage.getItem('session'));
  }
  sub: Subscription = new Subscription();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    /* this.SessionService.DatosSesion(sessionStorage.getItem('session'));  */
    
    
   /*  this.sub = this.SessionService.ObtenerDatosSesion().subscribe(
      /* Devuelve datos 
      (data) =>{
        console.log(data);
      },
      /* Devuelve error 
      (err)=>{
        console.log(err);}); */
  }
}

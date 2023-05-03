import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  sessionOK!: string;
  constructor(private Router: Router){
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sessionOK = sessionStorage.getItem("email")!;
    /* console.log(this.sessionOK); */
  }
  logOut(){
    sessionStorage.removeItem("email");
    this.Router.navigate(['/login']);
  }
}

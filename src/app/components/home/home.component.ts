import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  sessionOK!: string;

  location!:number[]

  

  constructor(private Router: Router,
    private LocationService: LocationService) {
    this.LocationService.obtenerLocation().subscribe((data)=>{
        if(data){
          this.location = data;
        }
    }); 
  }
  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sessionOK = sessionStorage.getItem("email")!;
  }
  logOut(){
    sessionStorage.removeItem("email");
    this.Router.navigate(['/login']);
  }
  
}

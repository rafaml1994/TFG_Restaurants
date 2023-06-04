import { Component } from '@angular/core';
import { Router } from '@angular/router';
/* import { Subject } from 'rxjs'; */
import { Product } from 'src/app/models/Product';
import { LocationService } from 'src/app/services/location.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  sessionOK!: string;
  location!: number[]
  restaurantes!: Product[];

  bandera:Boolean = false;


  constructor(private Router: Router,
    private LocationService: LocationService,
    private productService: ProductsService) {
  }
  ngOnInit() {
    this.sessionOK = sessionStorage.getItem("email")!;
    this.LocationService.obtenerLocation().subscribe((data) => {
      if (data) {
        this.location = data;
        console.log(this.location);
      }
    });
    this.productService.getProducts().then((restaurants) => {
      this.restaurantes = restaurants;
    })
  }
  logOut() {
    sessionStorage.removeItem("email");
    this.Router.navigate(['/login']);
  }

}

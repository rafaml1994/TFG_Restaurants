import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ParticlesComponent } from 'angular-particle';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {

  restaurants!:any[]
  filteredId!:string
  text!: any;

  restaurantesFiltrados!: any;

  constructor( 
    private productService : ProductsService,
    private Router : Router
    ) {
      this.productService.getProductName()
      .then(restaurants => {
        this.restaurants = restaurants
      })
  }

  search(event:any){
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.restaurants.length; i++) {
      let restaurant = this.restaurants[i];
      if (restaurant.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(restaurant.name);
        
      }
    }
    this.restaurantesFiltrados = filtered;
  }
  
  searchRestaurant(){
      this.restaurants.forEach(restaurant => {
        if (this.text == restaurant.name) {
          this.Router.navigate([`/restaurant-component/${restaurant.id}`]);
        }
      });
      this.text = '';
  }
}

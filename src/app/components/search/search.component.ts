import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {

  restaurants!:any[]

  text!: any;

  restaurantesFiltrados!: any;

  constructor( 
    private productService : ProductsService
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
      console.log(this.text);
      this.text = '';
  }
}

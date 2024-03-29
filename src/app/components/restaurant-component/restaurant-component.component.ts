import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-restaurant-component',
  templateUrl: './restaurant-component.component.html',
  styleUrls: ['./restaurant-component.component.sass']
})
export class RestaurantComponentComponent {
  restaurant?: Product;
  faArrowLeft=faArrowLeft;
  constructor(
    private ProductsService: ProductsService,
    private Router : ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.ProductsService.getRestaurantId(this.Router.snapshot.paramMap.get('id')).then(element => {
      this.restaurant = element[0];
      console.log(element[0]);
      
      let tituloContainer:any = document.getElementById('titulo-container');
      tituloContainer.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),url(${this.restaurant?.image})`;
      tituloContainer.style.backgroundPosition = 'center'

      let imgMenu:any = document.getElementById('img-menu');
      let imgContainer:any = document.getElementById('img-container');
      if(this.restaurant?.cartaImg !== '' ){
        imgMenu.src = `${this.restaurant?.cartaImg}`;   
      }else{
        imgContainer.style.display = 'none';
      }
      
    })
  }
  back(){
    history.back();
  }
}

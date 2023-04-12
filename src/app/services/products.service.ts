import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = [
    "Bamboo Watch",
    "Black Watch",
    "Blue Band",
    "Blue T-Shirt",
    "Bracelet",
    "Brown Purse",
    "Chakra Bracelet",
    "Galaxy Earrings",
    "Game Controller",
    "Gaming Set",
    "Gold Phone Case",
    "Green Earbuds",
    "Green T-Shirt",
    "Grey T-Shirt",
    "Headphones",
    "Light Green T-Shirt",
    "Lime Band",
    "Mini Speakers",
    "Painted Phone Case",
    "Pink Band",
    "Pink Purse",
    "Purple Band",
    "Purple Gemstone Necklace",
    "Purple T-Shirt",
    "Shoes",
    "Sneakers",
    "Teal T-Shirt",
    "Yellow Earbuds",
    "Yoga Mat",
    "Yoga Set",
  ];

  constructor(private http: HttpClient) { }

  getProductName(){
    return this.http.get<any>('assets/pruebas.json')
    .toPromise()
    .then(res => res.data)
    .then(data =>{
      return data;
    });
  }


  getProducts() {
    return this.http.get<any>('assets/pruebas.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }
  
  getRestaurantId(id:any){
    return this.http.get<any>('assets/pruebas.json')
    .toPromise()
    .then(res => res.data)
    .then(data => {
      let restaurante = data.filter((data:any) => data.id === id)
      return restaurante;
    });
  }
}

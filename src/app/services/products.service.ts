import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
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

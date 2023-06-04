import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  //userLocation?: [number,number];

  location: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  
  constructor() {
    this.getUserLocation().then((data)=>{
      this.location.next(data);
    })
  }

  public async getUserLocation(): Promise<[number,number]>{
    const options = {
      enableHighAccuracy: true,
      timeout: Infinity,
      maximumAge: 0,
    };
    return new Promise((resolve,reject) => {
      navigator.geolocation.getCurrentPosition(
        ({coords})=>{
          resolve([coords.latitude,coords.longitude]);
        },
        (err)=>{
          alert(err.message);
          reject();
        },options)
    })
  }
  obtenerLocation(){
    return this.location?.asObservable();
  }
}

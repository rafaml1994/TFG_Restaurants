import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  sessionData: BehaviorSubject<String> = new BehaviorSubject<String>("false");

  constructor() { }

  DatosSesion(logedIn: String){
    this.sessionData.next(logedIn);
  }

  ObtenerDatosSesion(){
    return this.sessionData?.asObservable();
  }
}

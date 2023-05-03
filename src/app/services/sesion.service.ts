import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  sessionData!: BehaviorSubject<String>;

  constructor(private http: HttpClient) { }

  DatosSesion(data:string){
    this.sessionData.next(data);
  }
  ObtenerDatosSesion(){
    return this.sessionData.asObservable();
  }
}

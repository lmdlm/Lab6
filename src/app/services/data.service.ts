import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any>{
   return this.http.get('https://jsonblob.com/api/jsonblob/331d831d-3a99-11e9-9959-6df13763e2ba');
  }

  GetWeatherData():Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=b9c07316c7394fbd6f99416fb4f74367');
  }
}

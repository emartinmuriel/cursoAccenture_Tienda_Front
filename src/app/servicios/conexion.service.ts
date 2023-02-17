import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import {Categoria} from '../modelos/categoria';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
//Direccion de la API. En este caso local, el puerto en el que TOMCAT sirve nuestra api
API_URL: String = 'http://localhost:8080/';

//Inyectamos el http al crear el servicio
  constructor(private http : HttpClient) { }

  //Servicios que se consumiran de la API
  getApi(url:string) : Observable<any>{
    return this.http.get(this.API_URL+url).pipe(share());
  }
  postApi(url:string, categoria:Categoria) : Observable<any>{
    return this.http.post(this.API_URL+url,categoria).pipe(share());
  }
  putApi(url:string, categoria:Categoria) : Observable<any>{
    return this.http.put(this.API_URL+url,categoria).pipe(share());
  }
  delApi(url:string) : Observable<any>{
    return this.http.delete(this.API_URL+url).pipe(share());

  }
}

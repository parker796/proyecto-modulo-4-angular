import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Producto } from '../Modelo/Producto';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ServiceService {
  constructor(private http:HttpClient) { }

  baseUrl = 'http://localhost:8080/Dell';

  getProductos(){
    return this.http.get<Producto[]>(this.baseUrl);
  }

  createProducto(producto: Producto){
    return this.http.post<Producto>(this.baseUrl, producto);
  }

  /*
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(baseUrl);
  }*/
}




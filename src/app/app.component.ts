import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {ConexionService} from './servicios/conexion.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tittle = 'tienda';

 /* listado : any [] = [];

  constructor(private conexion :ConexionService){
    const datos: Observable<any> = this.conexion.getApi('categorias');
    
    console.log ("Listado de categorias:");

    datos.subscribe(
      (resp:any) => {
        this.listado = resp;
        console.log(this.listado);  //Esto me muestra en la consola el listado
      }
    )
  }*/

}

import { Component } from '@angular/core';
import {Categoria} from '../modelos/categoria';
import {ConexionService} from '../servicios/conexion.service';
import {Observable} from 'rxjs';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent {
  listaCategorias?:Categoria[];
  constructor (private apiService:ConexionService, private router:Router){}
  

//Al iniciar carga los datos desde el Service
ngOnInit():void{
  this.getListaCategorias();
}

//
getListaCategorias():void{
  const datos: Observable<any> = this.apiService.getApi('categorias');
  datos.subscribe(
    (resp:any) => {
      if(resp.status=200){
        this.listaCategorias = resp.datos;
      }
    }
  )
  }


EliminarCategoria(id:any): void {

 


  const datos: Observable<any> = this.apiService.delApi('categorias/'+id);
  if(confirm("¿Estás seguro de que quieres eliminar esta categoria?")) {
    datos.subscribe(
      (resp:any) => {
        if(resp.status==200){
          alert("Registro Eliminado");
          window.location.reload();
        }
  
        if (resp.status==400){
          alert("ERROR AL ELIMINAR EL REGISTRO: "+ resp.message);
        }
      }
    )
  }

}
}

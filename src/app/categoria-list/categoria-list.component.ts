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
      
  //    console.log(this.listaCategorias);  //Esto me muestra en la consola el listado
    }
  )
  }


  EliminarCategoria(id:any): void {
//  this.router.navigateByUrl('categoria/editar');
  const datos: Observable<any> = this.apiService.delApi('categoria/'+id);

  datos.subscribe(
    (resp:any) => {
      console.log(resp);}
  )

//
  this.getListaCategorias();
}
}

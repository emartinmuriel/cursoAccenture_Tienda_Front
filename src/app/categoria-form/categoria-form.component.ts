import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Categoria} from '../modelos/categoria';
import { ConexionService } from '../servicios/conexion.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent {
//El objeto categoria inicializado por defecto
categoria:Categoria = {
  id_categoria:0,
  cat_nombre:"",
  cat_descripcion:""
}
id : Number=0;
  constructor(private conexionServ: ConexionService, private route:ActivatedRoute, private router: Router){
  //Recogemos el id pasado por parámetro
  this.id = Number(this.route.snapshot.paramMap.get('id'));
//  console.log("EL id de la categoria es : " + this.id);
    if (this.id>0){  //Modificar elemento ya existente. Traemos el objeto de la base de datos 
      const datos: Observable<any> = this.conexionServ.getApi('categorias/'+ this.id);
     
      datos.subscribe(
        (resp:any) => {
          if(resp.status=200){
            this.categoria = resp.datos[0] as Categoria;
    //        console.log(this.categoria);
          }
        }
      )}
  }

  GuardarCategoria(categoria: Categoria){
    if (categoria.id_categoria==0){
      const datos: Observable<any> = this.conexionServ.postApi('categorias',categoria);
      datos.subscribe({
    
       next: (resp:any) => {
          if(resp.status=200){
            alert("Registro Guardado");
            this.router.navigateByUrl("categoria");
          }
       },
        error: (err) => {
          console.log(err);
        
          if (err.status==400){
            console.log(err.error.mensaje);
            alert("NO SE HA GUARDADO EL REGISTRO. ERROR:" +err.error.mensaje);
          }
        }
      })
      
    } else{ //Actualiza datos
      const datos: Observable<any> = this.conexionServ.putApi('categorias',categoria);
        datos.subscribe( {
          next: (resp:any) => {
    //        console.log(resp);
            if(resp.status=200){
              alert("Registro Actualizado");
              this.router.navigateByUrl("categoria");
            }
          }, 
          error: (err) => {
            console.log(err);
          
            if (err.status==400){
              console.log(err.error.mensaje);
              alert("NO SE HA ACTUALIZADO EL REGISTRO. ERROR:" +err.error.mensaje);
            }
          }
        })
      
    }
  } 
}

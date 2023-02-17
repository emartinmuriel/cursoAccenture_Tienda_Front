import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

const routes: Routes = [
  {path:'categoria', component: CategoriaListComponent},
  {path:'categoria/editar/:id', component: CategoriaFormComponent},
  {path:'', redirectTo:'/categoria',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

],
  exports: [RouterModule]
})
export class AppRoutingModule { }

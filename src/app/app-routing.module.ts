import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

const routes: Routes = [
  {path:'categoria', component: CategoriaListComponent},
  {path:'categoria/editar', component: CategoriaFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { AccesoComponent } from './components/acceso/acceso.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'acceso', component: AccesoComponent},
  {path:'**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

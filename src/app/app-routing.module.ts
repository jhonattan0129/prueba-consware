import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './Pages/home/home.component'
import {DashBoardComponent} from './Pages/dash-board/dash-board.component'
import {ListaClienteComponent} from './Pages/lista-cliente/lista-cliente.component'
import {ListaProductoComponent} from './Pages/lista-producto/lista-producto.component'
import {CrearProductoComponent} from './Pages/crear-producto/crear-producto.component'
import {CrearClienteComponent} from './Pages/crear-cliente/crear-cliente.component'
import {EditarClienteComponent} from './Pages/editar-cliente/editar-cliente.component'
import {EditarProductoComponent} from './Pages/editar-producto/editar-producto.component'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashBoardComponent
  },
  {
    path: 'lista-cliente',
    component: ListaClienteComponent
  },
  {
    path: 'lista-producto',
    component: ListaProductoComponent
  },
  {
    path: 'crear-producto',
    component: CrearProductoComponent
  },
  {
    path: 'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'editar-cliente',
    component: EditarClienteComponent
  },
  {
    path: 'editar-producto',
    component: EditarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

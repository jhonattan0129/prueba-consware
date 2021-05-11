import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavComponent } from './Components/nav/nav.component';
import { DashBoardComponent } from './Pages/dash-board/dash-board.component';
import { ListaClienteComponent } from './Pages/lista-cliente/lista-cliente.component';
import { ListaProductoComponent } from './Pages/lista-producto/lista-producto.component';
import { EditarProductoComponent } from './Pages/editar-producto/editar-producto.component';
import { EditarClienteComponent } from './Pages/editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from './Pages/crear-cliente/crear-cliente.component';
import { CrearProductoComponent } from './Pages/crear-producto/crear-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DashBoardComponent,
    ListaClienteComponent,
    ListaProductoComponent,
    EditarProductoComponent,
    EditarClienteComponent,
    CrearClienteComponent,
    CrearProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

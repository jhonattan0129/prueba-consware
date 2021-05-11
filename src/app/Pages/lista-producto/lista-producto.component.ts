import { Component, OnInit } from '@angular/core';
import request from 'superagent'
import * as url from '../../../config.js'
import swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss']
})
export class ListaProductoComponent implements OnInit {

  productos: [] = []

  constructor(private root: Router) { }

  ngOnInit(): void {
    console.log(url.variable+'/clientes')    
    request.get(`${url.variable}/productos`)
    .then(response => {
      console.log(response.body)
      this.productos = response.body
      console.log(this.productos)
    })
    .catch(err => {
      console.log(err)
    })
  }

  eliminarProducto(id) {
    request.delete(`${url.variable}/productos/${id}`)
    .then(response => {
      swal.fire({
        icon: 'success',
        title: 'Cliente Eliminado'
      }).then(r => {
        this.ngOnInit()
      })
    })
    .catch(err => {
      swal.fire({
        icon: 'error',
        title: 'Ups',
        text: 'No se pudo eliminar el cliente'
      })
    })
  }
  editarProducto(id) {
    localStorage.setItem('idProducto', id);
    //console.log(localStorage.getItem('idCliente'))
    this.root.navigateByUrl('editar-producto')
  }

}

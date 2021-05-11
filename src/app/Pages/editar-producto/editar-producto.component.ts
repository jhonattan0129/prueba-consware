import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import request from 'superagent'
import swal from 'sweetalert2'
import * as url from '../../../config.js'

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  producto = new FormGroup({
    nombre: new FormControl(''),
    cantidad: new FormControl(''),
    precio: new FormControl('')
  })

  constructor(private root: Router) { }

  ngOnInit(): void {
    request.get(`${url.variable}/productos/${localStorage.getItem('idProducto')}`)
    .then(response => {
      this.producto.setValue({
        nombre: response.body.Nombre,
        cantidad: response.body.Cantidad,
        precio: response.body.Precio
      })
    }).catch(err => {
      console.log(err)
    })
  }
  editarProducto() {
    if(this.producto.value.nombre != "" && this.producto.value.cantidad != "" && this.producto.value.precio != ""){
      request.put(`${url.variable}/productos/${localStorage.getItem('idProducto')}`)
      .send({
        Nombre: this.producto.value.nombre,
        Cantidad: this.producto.value.cantidad,
        Precio: this.producto.value.precio
      }).then(response => {
        console.log(response)
        swal.fire({
          icon: 'success',
          title: 'Producto Actualizado',
          text: 'El producto fue actualizado satisfactoriamente'
        }).then(r => {
          this.root.navigateByUrl('dashboard')
        })
      }).catch(err => {
        console.log(err)
        swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Producto no actualizado'
        })
      })
    }else{
      swal.fire({
        icon: 'error',
        title: 'Ups',
        text: 'Campos faltantes'
      })
    }
  }

}

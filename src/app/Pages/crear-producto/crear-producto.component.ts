import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import request from 'superagent'
import swal from 'sweetalert2'
import * as url from '../../../config.js'

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {
  producto = new FormGroup({
    nombre: new FormControl(''),
    cantidad: new FormControl(''),
    precio: new FormControl('')
  })
  constructor(private root: Router) { }

  ngOnInit(): void {
  }

  crearProducto() {
    if(this.producto.value.nombre != "" && this.producto.value.cantidad != "" && this.producto.value.precio != ""){
      request.post(`${url.variable}/productos`)
      .send({
        Nombre: this.producto.value.nombre,
        Cantidad: this.producto.value.cantidad,
        Precio: this.producto.value.precio
      }).then(response => {
        console.log(response)
        swal.fire({
          icon: 'success',
          title: 'Producto Creado',
          text: 'El producto fue creado satisfactoriamente'
        }).then(r => {
          this.root.navigateByUrl('dashboard')
        })
      }).catch(err => {
        console.log(err)
        swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Producto no creado'
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

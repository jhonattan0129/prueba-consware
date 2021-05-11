import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import request from 'superagent'
import swal from 'sweetalert2'
import * as url from '../../../config.js'

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {
  cliente = new FormGroup({
    nombre: new FormControl(''),
    cedula: new FormControl(''),
    telefono: new FormControl('')
  })
  constructor(private root: Router) { }

  ngOnInit(): void {
  }

  crearCliente() {
    if(this.cliente.value.nombre != "" && this.cliente.value.cedula != "" && this.cliente.value.telefono != ""){
      request.post(`${url.variable}/clientes`)
      .send({
        Nombre: this.cliente.value.nombre,
        Cedula: this.cliente.value.cedula,
        Telefono: this.cliente.value.telefono
      }).then(response => {
        console.log(response)
        swal.fire({
          icon: 'success',
          title: 'Cliente Creado',
          text: 'El cliente fue creado satisfactoriamente'
        }).then(r => {
          this.root.navigateByUrl('dashboard')
        })
      }).catch(err => {
        console.log(err)
        swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Cliente no creado'
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

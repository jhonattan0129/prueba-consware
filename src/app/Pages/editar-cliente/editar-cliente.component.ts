import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import request from 'superagent'
import swal from 'sweetalert2'
import * as url from '../../../config.js'

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

  cliente = new FormGroup({
    nombre: new FormControl(''),
    cedula: new FormControl(''),
    telefono: new FormControl('')
  })
  constructor(private root: Router) { }

  ngOnInit(): void {
    request.get(`${url.variable}/clientes/${localStorage.getItem('idCliente')}`)
    .then(response => {
      this.cliente.setValue({
        nombre: response.body.Nombre,
        cedula: response.body.Cedula,
        telefono: response.body.Telefono
      })
    }).catch(err => {
      console.log(err)
    })
  }

  editarCliente() {
    if(this.cliente.value.nombre != "" && this.cliente.value.cedula != "" && this.cliente.value.telefono != ""){
      request.put(`${url.variable}/clientes/${localStorage.getItem('idCliente')}`)
      .send({
        Nombre: this.cliente.value.nombre,
        Cedula: this.cliente.value.cedula,
        Telefono: this.cliente.value.telefono
      }).then(response => {
        console.log(response)
        swal.fire({
          icon: 'success',
          title: 'Cliente Actualizado',
          text: 'El cliente fue actualizado satisfactoriamente'
        }).then(r => {
          this.root.navigateByUrl('dashboard')
        })
      }).catch(err => {
        console.log(err)
        swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Cliente no actualizado'
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

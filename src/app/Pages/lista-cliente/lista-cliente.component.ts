import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import request from 'superagent'
import * as url from '../../../config.js'
import swal from 'sweetalert2'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {

  copiaClientes: [] = []
  clientes:[] = []

  buscar = new FormGroup({
    nombre: new FormControl('')
  })
  constructor(private root: Router) { }

  ngOnInit(): void {
    request.get(`${url.variable}/clientes`)
    .then(response => {
      console.log(response.body)
      this.clientes = response.body
      console.log(this.clientes)
    })
    .catch(err => {
      console.log(err)
    })
    
  }

  editarCliente(id) {
    localStorage.setItem('idCliente', id);
    //console.log(localStorage.getItem('idCliente'))
    this.root.navigateByUrl('editar-cliente')
  }

  eliminarCliente(id) {
    request.delete(`${url.variable}/clientes/${id}`)
    .then(response => {
      console.log(response)
      swal.fire({
        icon: 'success',
        title: 'Cliente Eliminado'
      }).then(r => {
        this.ngOnInit()
      })
    }).catch(err => {
      swal.fire({
        icon: 'error',
        title: 'Ups',
        text: 'No se pudo eliminar el cliente'
      })
      console.log(err)
    })
  }
  
  buscarPorNombre() {
    
  }

}

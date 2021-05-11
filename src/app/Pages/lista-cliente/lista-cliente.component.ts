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

  copiaClientes= []
  clientes = []

  buscar = new FormGroup({
    nombre: new FormControl('')
  })
  constructor(private root: Router) { }

  ngOnInit(): void {
    request.get(`${url.variable}/clientes`)
      .then(response => {
        console.log(response.body)
        this.clientes = response.body
        this.copiaClientes = this.clientes
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
    var arreglo = []    
    if (this.buscar.value.nombre != "") {
      request.get(`${url.variable}/clientes`)
        .then(response => {
          var resultado = response.body
          for (let x of resultado) {
            if (x.Nombre.toUpperCase().includes(this.buscar.value.nombre.toUpperCase())) {
              arreglo.push(x)            
            }
          }
          this.clientes = arreglo
          for(let w of arreglo){
            console.log(w)
          }
        })
    }else{
      this.clientes = this.copiaClientes
    }
  }

}

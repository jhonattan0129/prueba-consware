import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logIn = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private root: Router) { }

  ngOnInit(): void {
  }

  Ingresar(){
    if(this.logIn.value.usuario != '' && this.logIn.value.password){
      localStorage.setItem('usuario', this.logIn.value.usuario )
      swal.fire({
        icon: 'success',
        title: 'Credenciales correctas',
        text: 'Usuario y Contraseña Correctos'
      }).then(r =>{
        this.root.navigateByUrl('dashboard')
      })
      
    }else{
      swal.fire({
        icon: 'error',
        title: 'Credenciales Incorrectas',
        text: 'Usuario y Contraseña Incorrectos'
      })
    }
  }
}

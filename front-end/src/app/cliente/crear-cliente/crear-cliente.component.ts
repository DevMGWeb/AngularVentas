import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { ClienteCreacionDTO } from '../cliente';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {

  constructor(private router : Router) { }

  guardarCambios(cliente : ClienteCreacionDTO){
    // ... guardar cambios 
    console.log(cliente);
    // this.router.navigate(["/cliente"]);
  }


}

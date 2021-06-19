import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { EmpresaCreacionDTO } from '../empresa';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent {

  constructor(private router: Router) { }

  guardarCambios(empresa: EmpresaCreacionDTO){
    //.... guardar los cambios
    console.log(empresa);
    this.router.navigate(["/empresa"]);
  }
}

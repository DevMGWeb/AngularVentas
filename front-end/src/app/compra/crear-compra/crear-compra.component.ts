import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';

@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
  styleUrls: ['./crear-compra.component.css']
})
export class CrearCompraComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form:FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre : ['', {validators : [Validators.required, Validators.minLength(3),  primeraLetraMayuscula() ] }]
    })
  }

  guardarCambios(){
    // ...guardar cambios
    this.router.navigate(["/compra"]);
  }

  obtenerErroresNombre(){
    var nombre = this.form.get("nombre");

    if(nombre.hasError("required")){
      return 'El nombre es requerido';
    }

    if(nombre.hasError("minlength")){
      return 'El nombre debe tener al menos 3 caracteres';
    }

    if(nombre.hasError('primeraLetraMayuscula')){
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }
}

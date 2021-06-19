import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { AlmacenCreacionDTO } from '../almacen';

@Component({
  selector: 'app-formulario-almacen',
  templateUrl: './formulario-almacen.component.html',
  styleUrls: ['./formulario-almacen.component.css']
})
export class FormularioAlmacenComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  form : FormGroup;

  @Input()
  modelo: AlmacenCreacionDTO;

  @Output()
  onSubmit: EventEmitter<AlmacenCreacionDTO> = new EventEmitter<AlmacenCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre : ['', { validators : [Validators.required, Validators.minLength(3), primeraLetraMayuscula()] }],
      capacidad: ['', { validators : [Validators.min(0), Validators.pattern(/^[0-9]\d*$/)] }],
      estado: ['']
    });

    this.form.patchValue(this.modelo);
  }

  obtenerErroresNombre(){
    var campo = this.form.get('nombre');

    if(campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    if(campo.hasError('minlength')){
      return 'La longitud minima es de 3';
    }

    if(campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }

  obtenerErroresCapacidad(){
    var campo = this.form.get('capacidad');

    if(campo.hasError('min')){
      return 'La capacidad minima es 0';
    }

    if(campo.hasError('pattern')){
      return 'El formato del campo es incorrecto';
    }

    return '';
  }


  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

}

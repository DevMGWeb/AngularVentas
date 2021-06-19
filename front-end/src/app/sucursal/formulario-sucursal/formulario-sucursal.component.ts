import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { SucursalCreacionDTO } from '../sucursal';

@Component({
  selector: 'app-formulario-sucursal',
  templateUrl: './formulario-sucursal.component.html',
  styleUrls: ['./formulario-sucursal.component.css']
})
export class FormularioSucursalComponent implements OnInit {

  form : FormGroup;

  constructor( private formBuilder : FormBuilder) { }

  @Output()
  onSubmit: EventEmitter<SucursalCreacionDTO> = new EventEmitter<SucursalCreacionDTO>();

  @Input()
  modelo: SucursalCreacionDTO;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators : [ Validators.required, Validators.minLength(3), primeraLetraMayuscula() ] }]
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  obtenerErrorNombre(){
    var campo = this.form.get("nombre");

    if(campo.hasError("required")){
      return 'El valor del campo nombre es requerido';
    }

    if(campo.hasError("minlength")){
      return 'El nombre debe tener al menos 3 caracteres';
    }

    if(campo.hasError("primeraLetraMayuscula")){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

}

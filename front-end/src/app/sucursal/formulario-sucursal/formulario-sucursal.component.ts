import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordanada } from 'src/app/utilidades/mapa/coordenadas';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { SucursalCreacionDTO, SucursalDTO } from '../sucursal';

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
  modelo: SucursalDTO;

  coordenadasInicial: Coordanada[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators : [ Validators.required, Validators.minLength(3), primeraLetraMayuscula() ]}],
      codigoPostal: ['', { validators: [ Validators.required, Validators.minLength(3), Validators.maxLength(8) ]}],
      telefono: ['', {validators : [Validators.required]}],
      telefono2: [''],
      email: ['', { validators : [ Validators.required, Validators.email ]}],
      latitud: ['', { validators : [ Validators.required ]}],
      longitud: ['', { validators : [ Validators.required] }],
      estado : ['']
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.coordenadasInicial.push({latitud : this.modelo.latitud, longitud: this.modelo.longitud });
    }
  }

  obtenerErroresNombre(){
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

  obtenerErroresCodigoPostal(){
    var campo = this.form.get("codigoPostal");

    if(campo.hasError("required")){
      return 'El valor del campo nombre es requerido';
    }

    if(campo.hasError("minlength")){
      return 'El nombre debe tener al menos 3 caracteres';
    }

    if(campo.hasError("maxlength")){
      return 'El nombre debe tener al menos 8 caracteres';
    }

    return '';
  }

  obtenerErroresTelefono(){
    var campo = this.form.get("telefono");

    if(campo.hasError("required")){
      return 'El valor del campo nombre es requerido';
    }

    return '';
  }
  
  obtenerErroresEmail(){
    var campo = this.form.get("email");

    if(campo.hasError("required")){
      return 'El valor del campo nombre es requerido';
    }

    if(campo.hasError("email")){
      return 'El formato del correo no es valido';
    }

    return '';
  }

  coordenadaSeleccionada(coordenada: Coordanada){
    this.form.patchValue(coordenada);
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

}

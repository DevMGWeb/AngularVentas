import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { ClienteCreacionDTO, ClienteDTO } from '../cliente';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit {

  @Input()
  modelo: ClienteDTO;

  @Output()
  onSubmit : EventEmitter<ClienteCreacionDTO> = new EventEmitter<ClienteCreacionDTO>();

  constructor(private formBuilder: FormBuilder) { }

  form:FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre : ['', { validators: [ Validators.required, Validators.minLength(3), primeraLetraMayuscula() ] }],
      fechaNacimiento: [''],
      foto: ['']
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  mostrarErroresNombre(){
    var nombre = this.form.get('nombre');

    if(nombre.hasError("required")){
      return 'Campo es requerido';
    }

    if(nombre.hasError("minlength")){
      return 'El campo debe tener una longitud minima de 3 caraceteres';
    }

    if(nombre.hasError('primeraLetraMayuscula')){
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

  archivoSeleccionado(file:File){
    this.form.get('foto').setValue(file);
  }


}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { EmpresaCreacionDTO } from '../empresa';

@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.css']
})
export class FormularioEmpresaComponent implements OnInit {

  form : FormGroup;

  @Output()
  onSubmit: EventEmitter<EmpresaCreacionDTO> = new EventEmitter<EmpresaCreacionDTO>();

  @Input()
  modelo: EmpresaCreacionDTO;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators : [ Validators.required, Validators.minLength(3), primeraLetraMayuscula() ] }],
      nombreComercial: ['', { validators : [ Validators.minLength(3), primeraLetraMayuscula() ] }],
      ruc: ['', { validators : [Validators.required, Validators.minLength(3), Validators.maxLength(11), Validators.pattern(/^[0-9]\d*$/) ] }],
      telefono: [''],
      email: ['', { validators: [Validators.required, Validators.email] }],
      logo:['']
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  obtenerErroresNombre(){
    var campo = this.form.get("nombre");

    if(campo.hasError("required")){
      return 'El campo nombre es requerido';
    }

    if(campo.hasError("minlength")){
      return 'El campo debe contener al menos 3 caracteres';
    }

    if(campo.hasError('primeraLetraMayuscula')){
      return campo.getError("primeraLetraMayuscula").mensaje;
    }

    return '';
  }

  obtenerErroresNombreComercial(){
    var campo = this.form.get("nombreComercial");

    if(campo.hasError("minlength")){
      return 'El campo debe contener al menos 3 caracteres';
    }

    if(campo.hasError('primeraLetraMayuscula')){
      return campo.getError("primeraLetraMayuscula").mensaje;
    }

    return '';
  }

  obtenerErroresRuc(){
    var campo = this.form.get("ruc");

    if(campo.hasError("required")){
      return 'El campo nombre es requerido';
    }

    if(campo.hasError("minlength")){
      return 'El campo debe contener al menos 3 caracteres';
    }

    if(campo.hasError("maxlength")){
      return 'El campo no debe contener mas de 11 caracteres';
    }

    if(campo.hasError("pattern")){
      return 'El ruc debe estar compuesto de solo numeros';
    }

    return '';
  }

  obtenerErroresEmail(){
    var campo = this.form.get("email");

    if(campo.hasError("required")){
      return 'El campo es requerido';
    }

    if(campo.hasError("email")){
      return 'El formato del campo es de tipo email';
    }

    return '';
  }

  archivoSeleccionado(logo:File){
    this.form.get('logo').setValue(logo);
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }
}

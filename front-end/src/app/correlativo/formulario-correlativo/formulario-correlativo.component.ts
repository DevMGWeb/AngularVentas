import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CorrelativoCreacionDTO } from '../correlativo';

@Component({
  selector: 'app-formulario-correlativo',
  templateUrl: './formulario-correlativo.component.html',
  styleUrls: ['./formulario-correlativo.component.css']
})
export class FormularioCorrelativoComponent implements OnInit {

  @Output()
  onSubmit: EventEmitter<CorrelativoCreacionDTO> = new EventEmitter<CorrelativoCreacionDTO>(); 

  @Input()
  modelo: CorrelativoCreacionDTO;

  constructor(private router: Router, private formBuilder : FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      serie: ['', { validators: [ Validators.required, Validators.maxLength(4), Validators.minLength(3) ]}],
      correlativoActual : ['', { validators: [ Validators.required, Validators.maxLength(8), Validators.minLength(6) ]}],
      correlativoInicial: ['', { validators: [ Validators.required, Validators.maxLength(8), Validators.minLength(6) ]}],
      correlativoFinal: ['', { validators: [ Validators.required, Validators.maxLength(8), Validators.minLength(6) ]}],
      firmaAutorizacion: ['', { validators: [Validators.minLength(3) ]}],
      estado: ['']
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

  mostrarErroresSerie(){
    var campo = this.form.get("serie");

    if(campo.hasError("required")){
      return 'El campo nombre es requerido';
    }

    if(campo.hasError("minlength")){
      return 'El campo debe contener al menos 3 caracteres';
    }

    if(campo.hasError("maxlength")){
      return 'El campo debe contener al menos 4 caracteres';
    }

    return '';
  }

  mostrarErroresCorrelativoActual(){
    var campo = this.form.get("correlativoActual");

    if(campo.hasError("required")){
      return 'El campo es requerido';
    }

    if(campo.hasError("minlength")){
      return 'El campo debe contener al menos 6 caracteres';
    }

    if(campo.hasError("maxlength")){
      return 'El campo debe contener al menos 8 caracteres';
    }

    return '';
  }

  mostrarErroresCorrelativoInicial(){
    var campo = this.form.get("correlativoInicial");

    if(campo.hasError("required")){
      return 'El campo es requerido';
    }

    if(campo.hasError("minlength")){
      return 'El campo debe contener al menos 6 caracteres';
    }

    if(campo.hasError("maxlength")){
      return 'El campo debe contener al menos 8 caracteres';
    }

    return '';
  }

  mostrarErroresCorrelativoFinal(){
    var campo = this.form.get("correlativoFinal");

    if(campo.hasError("required")){
      return 'El campo es requerido';
    }

    if(campo.hasError("minlength")){
      return 'El campo debe contener al menos 6 caracteres';
    }

    if(campo.hasError("maxlength")){
      return 'El campo debe contener al menos 8 caracteres';
    }

    return '';
  }

  mostrarErroresFirmaAutorizacion(){
    var campo = this.form.get("firmaAutorizacion");

    if(campo.hasError("minlength")){
      return 'El campo debe contener al menos 3 caracteres';
    }
    
    return '';
  }

}

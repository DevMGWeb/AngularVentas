import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CuentasCreacionDTO, CuentasDTO } from '../cuentas';

@Component({
  selector: 'app-formulario-cuentas',
  templateUrl: './formulario-cuentas.component.html',
  styleUrls: ['./formulario-cuentas.component.css']
})
export class FormularioCuentasComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  @Input()
  modelo: CuentasDTO;

  @Output()
  OnSubmit : EventEmitter<CuentasCreacionDTO> = new EventEmitter<CuentasCreacionDTO>();

  form : FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre : ''
    });

    if(this.modelo !== undefined){
      this.form.get("nombre").setValue(this.modelo.banco);
    }
  }

  guardarCambios(){
    this.OnSubmit.emit(this.form.value);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      correlativoActual : '',
    })

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

}

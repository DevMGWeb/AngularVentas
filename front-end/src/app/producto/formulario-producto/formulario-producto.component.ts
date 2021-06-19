import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { ProductoCreacionDTO } from '../producto';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  form : FormGroup;

  @Input()
  modelo: ProductoCreacionDTO;

  @Output()
  onSubmit : EventEmitter<ProductoCreacionDTO> = new EventEmitter<ProductoCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre : ['', { validators : [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]}],
      selected: ['valid', { validators : [ Validators.required, Validators.pattern('valid'), ] } ],
      imagen:[]
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
      return campo.getError("primeraLetraMayuscula").mensaje;
    }

    return '';
  }
  
  archivoSeleccionado(imagen:File){
    this.form.get("imagen").setValue(imagen);
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }
}

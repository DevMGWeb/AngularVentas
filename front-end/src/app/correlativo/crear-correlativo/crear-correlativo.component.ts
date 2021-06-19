import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CorrelativoCreacionDTO } from '../correlativo';

@Component({
  selector: 'app-crear-correlativo',
  templateUrl: './crear-correlativo.component.html',
  styleUrls: ['./crear-correlativo.component.css']
})
export class CrearCorrelativoComponent  {

  constructor(private router: Router) { }

  guardarCambios(modelo: CorrelativoCreacionDTO){
    // ...guardar cambios
    console.log(modelo);
    this.router.navigate(["/correlativo"]);
  }

}

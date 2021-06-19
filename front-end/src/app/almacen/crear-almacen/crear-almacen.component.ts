import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlmacenCreacionDTO } from '../almacen';

@Component({
  selector: 'app-crear-almacen',
  templateUrl: './crear-almacen.component.html',
  styleUrls: ['./crear-almacen.component.css']
})
export class CrearAlmacenComponent {

  constructor(private router: Router) { }
 
  guardarCambios(almacen: AlmacenCreacionDTO){
    // ... guardar cambios
    console.log(almacen);
    this.router.navigate(["/almacen"]);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-caja',
  templateUrl: './crear-caja.component.html',
  styles: [
  ]
})
export class CrearCajaComponent implements OnInit {

  constructor(private router : Router, private formBuilder: FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre : ''
    })
  }

  guardarCambios(){
    // ... guardar cambios
    this.router.navigate(["/caja"]);
  }

}

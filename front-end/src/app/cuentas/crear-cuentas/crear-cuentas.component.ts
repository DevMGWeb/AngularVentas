import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CuentasCreacionDTO } from '../cuentas';

@Component({
  selector: 'app-crear-cuentas',
  templateUrl: './crear-cuentas.component.html',
  styleUrls: ['./crear-cuentas.component.css']
})
export class CrearCuentasComponent implements OnInit {

  constructor(private router: Router, private formBuilder:FormBuilder) { }

  form : FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre : ''
    });
  }

  guardarCambios(cuenta: CuentasCreacionDTO){
    // .. guardar cambios
    console.log(cuenta);
    this.router.navigate(["/cuenta"])
  }
}

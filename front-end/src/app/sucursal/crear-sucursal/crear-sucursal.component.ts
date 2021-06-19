import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalCreacionDTO } from '../sucursal';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent {

  constructor(private router: Router) { }

  guardarCambios(sucursal:SucursalCreacionDTO){
    // ...guardar cambios
    console.log(sucursal);
    this.router.navigate(["/sucursal"]);
  }
}

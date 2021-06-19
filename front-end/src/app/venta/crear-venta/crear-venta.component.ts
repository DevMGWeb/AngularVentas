import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardarCambios(){
    // .. guardar cambios
    this.router.navigate(["/venta"]);
  }
}

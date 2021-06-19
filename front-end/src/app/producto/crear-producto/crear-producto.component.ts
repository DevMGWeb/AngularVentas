import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoCreacionDTO } from '../producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {

  constructor(private router:Router) { }

  guardarCambios(producto : ProductoCreacionDTO){
    // ..guardar Cambios
    console.log(producto);
    this.router.navigate(["/producto"]);
  }
}

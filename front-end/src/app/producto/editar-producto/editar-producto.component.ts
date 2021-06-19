import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoCreacionDTO, ProductoDTO } from '../producto';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private router: Router) { }

  modelo: ProductoDTO = { nombre: "Drama", imagen: '' };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
    });
  }

  guardarCambios(producto : ProductoCreacionDTO){
    // ..guardar Cambios
    console.log(producto);
    this.router.navigate(["/producto"]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlmacenCreacionDTO } from '../almacen';

@Component({
  selector: 'app-editar-almacen',
  templateUrl: './editar-almacen.component.html',
  styleUrls: ['./editar-almacen.component.css']
})
export class EditarAlmacenComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  modelo:AlmacenCreacionDTO = { nombre: 'Drama',  capacidad: 2000, estado: true, latitud:10.241515796865226, longitud:-68.01166355609895 };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
    });
  }

  guardarCambios(almacen: AlmacenCreacionDTO){
    // ... guardar cambios
    console.log(almacen);
    this.router.navigate(["/almacen"]);
  }
}

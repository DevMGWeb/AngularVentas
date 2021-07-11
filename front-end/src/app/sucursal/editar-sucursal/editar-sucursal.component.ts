import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SucursalCreacionDTO, SucursalDTO } from '../sucursal';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private router: Router) { }

  modelo : SucursalDTO = { nombre : 'Sucursal', codigoPostal: '', telefono:'', telefono2:'', email: '', estado: true, latitud:1, longitud:1 }; 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
    });
  }

  guardarCambios(sucursal:SucursalDTO){
    console.log(sucursal);
    this.router.navigate(["/sucursal"]);
  }
}

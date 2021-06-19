import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SucursalCreacionDTO } from '../sucursal';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private router: Router) { }

  modelo : SucursalCreacionDTO = { nombre : 'Sucursal' }; 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
    });
  }

  guardarCambios(sucursal:SucursalCreacionDTO){
    console.log(sucursal);
    this.router.navigate(["/sucursal"]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CuentasCreacionDTO, CuentasDTO } from '../cuentas';

@Component({
  selector: 'app-editar-cuentas',
  templateUrl: './editar-cuentas.component.html',
  styleUrls: ['./editar-cuentas.component.css']
})
export class EditarCuentasComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private router: Router) { }

  modelo:CuentasDTO = { banco: '1212212', comentarioAdiccionales:'', concepto: '', funciones: '', numeroCuenta: ''};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
    });

  }

  guardarCambios(cuenta:CuentasCreacionDTO){
    console.log(cuenta);
    this.router.navigate(["/cuenta"]);
  }

}

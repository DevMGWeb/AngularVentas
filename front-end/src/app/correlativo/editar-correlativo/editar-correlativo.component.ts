import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CorrelativoCreacionDTO, CorrelativoDTO } from '../correlativo';

@Component({
  selector: 'app-editar-correlativo',
  templateUrl: './editar-correlativo.component.html',
  styleUrls: ['./editar-correlativo.component.css']
})
export class EditarCorrelativoComponent implements OnInit {

  modelo:CorrelativoDTO = { serie: '0001', correlativoActual:'00000001', correlativoInicial: '00000001', correlativoFinal: '99999999', estado: true, firmaAutorizacion:'', };

  constructor(private activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
    });
  }

  guardarCambios(modelo: CorrelativoCreacionDTO){
    console.log(modelo);
    this.router.navigate(["/correlativo"]);
  }

}

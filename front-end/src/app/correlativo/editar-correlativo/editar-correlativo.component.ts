import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CorrelativoCreacionDTO } from '../correlativo';

@Component({
  selector: 'app-editar-correlativo',
  templateUrl: './editar-correlativo.component.html',
  styleUrls: ['./editar-correlativo.component.css']
})
export class EditarCorrelativoComponent implements OnInit {

  modelo:CorrelativoCreacionDTO = { correlativoActual:'1212312312' };

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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-venta',
  templateUrl: './editar-venta.component.html',
  styleUrls: ['./editar-venta.component.css']
})
export class EditarVentaComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id);
    });
  }

}

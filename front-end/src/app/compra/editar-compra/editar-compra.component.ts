import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-compra',
  templateUrl: './editar-compra.component.html',
  styleUrls: ['./editar-compra.component.css']
})
export class EditarCompraComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id);
    });
  }

}

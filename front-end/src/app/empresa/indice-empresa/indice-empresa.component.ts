import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-indice-empresa',
  templateUrl: './indice-empresa.component.html',
  styleUrls: ['./indice-empresa.component.css']
})
export class IndiceEmpresaComponent implements OnInit {

  title = "Empresa";

  constructor(private empresaService : EmpresaService) { }

  ngOnInit(): void {
    const empresas = this.empresaService.obtenerTodos()
    .subscribe(empresas => {
        console.log(empresas);
    }, error => console.error(error));
  }

}

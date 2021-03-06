import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaCreacionDTO, EmpresaDTO } from '../empresa';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private router: Router) { }

  modelo: EmpresaDTO = { 
                        id:1,
                        nombre: 'Drama', 
                        logo: 'https://th.bing.com/th/id/R6e104b9e0ad098b1302cff7ec21f7ab1?rik=MwbweIzMraf46w&riu=http%3a%2f%2fwww.websa100.com%2fwp-content%2fuploads%2f2016%2f04%2fLogotipos-de-empresas-color-naranja.jpg&ehk=owWPMiCLOha5qMR6iYgtONd7g5b%2fYLKfKLK2nLsL%2blo%3d&risl=&pid=ImgRaw',
                        email: 'mig@hotmail.com',
                        latitud:10.241515796865226,
                        longitud:-68.01166355609895,
                        nombreComercial: 'Drama',
                        ruc: '123123123123',
                        telefono: '1212313312'  
                      };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
    });
  }

  guardarCambios(empresa:EmpresaCreacionDTO){
    console.log(empresa);
    this.router.navigate(["/empresa"]);
  }

}

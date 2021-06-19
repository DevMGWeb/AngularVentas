import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteCreacionDTO, ClienteDTO } from '../cliente';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  modelo: ClienteDTO = { nombre: 'Drama', fechaNacimiento: new Date(), foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Tom_Holland_MTV_2018_%2802%29.jpg/330px-Tom_Holland_MTV_2018_%2802%29.jpg' };

  constructor(private activatedRoute : ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
    });
  }

  guardarCambios(cliente : ClienteCreacionDTO){
    // ... guardar cambios 
    console.log(cliente);
    this.router.navigate(["/cliente"]);
  }


}

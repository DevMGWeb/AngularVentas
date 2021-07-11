import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpresaDTO } from './empresa';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'empresa';

  public obtenerTodos():Observable<EmpresaDTO[]>{
    return this.http.get<EmpresaDTO[]>(this.apiURL);
  }
}

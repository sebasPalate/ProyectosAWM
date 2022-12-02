import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from '../models/agencia.model';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
  // Activar el modulo de peticiones http, activar en el appmodule
  // Añadido
  url = "/api/agencias/";
  // FIn
  constructor(private http: HttpClient) { }

  //Añadido
  loadAgencies(): Observable<any> {
    return this.http.get(this.url);
  }

  loadAgency(id: String): Observable<any> {
    return this.http.get(this.url + id);
  }

  addAgency(agencia: Agency): Observable<any> {
    return this.http.post(this.url, agencia);
  }

  updateAgency(id: String, agencia: Agency): Observable<any> {
    return this.http.put(this.url + id, agencia);
  }

  deleteAgency(id: String): Observable<any> {
    return this.http.delete(this.url + id);
  }
  // FIn

}

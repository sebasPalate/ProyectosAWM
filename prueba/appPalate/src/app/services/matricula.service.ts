import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matricula } from '../models/matricula.model';
import { MetaDataColumn } from '../interfaces/metacolumns.interface';


@Injectable({
  providedIn: 'root'
})

export class MatriculaService {
  url = '/api/matriculas/';

  /* Carga Estática */
  records: Matricula[] = [
    {
      marca: 'Dr. Juan Perez',
      modelo: 'Juan Perez',
      color: 'Cardiologia',
      placa: 'Electrocardiograma',
/*       fecha: '2022-12-12'
 */    }
  ]

  /* Carga de Cabeceras */
  metaDataColumns: MetaDataColumn[] = [
    { field: "marca", title: "MARCA" },
    { field: "modelo", title: "MODELO" },
    { field: "color", title: "COLOR" },
    { field: "placa", title: "PLACA" },
/*     { field: "fecha", title: "FECHA" },
 */  ]

  constructor(private http: HttpClient) { }

  loadMatriculas(): Observable<any> {
    return this.http.get(this.url);
  }

  loadMatricula(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  createMatricula(matricula: Matricula): Observable<any> {
    return this.http.post(this.url, matricula);
  }

  updateMatricula(matricula: Matricula, id: string): Observable<any> {
    return this.http.put(this.url + id, matricula);
  }

  deleteMatricula(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  getRecords(): any[] {
    return [...this.records];
  }

  getMetaDataColumns(): MetaDataColumn[] {
    return [...this.metaDataColumns];
  }
}

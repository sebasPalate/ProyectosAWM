import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  api = "http://localhost:4500/api/cursos";

  constructor(private http: HttpClient) {
  }

  obtenerCursos() {
    return this.http.get(this.api);
  }

  obtenerCurso(id: String) {
    return this.http.get(`${this.api}/${id}`);
  }

  ingresarCurso(curso: Curso) {
    return this.http.post(this.api, curso);
  }

  eliminarCurso(id: any) {
    return this.http.delete(`${this.api}/${id}`);
  }

  actualizarCurso(id: any, curso: Curso) {
    return this.http.put(`${this.api}/${id}`, curso);
  }
}

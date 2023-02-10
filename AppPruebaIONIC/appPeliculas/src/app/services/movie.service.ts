import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  api = "http://localhost:4500/api/peliculas";

  constructor(private http: HttpClient ) { }

  obtenerPeliculas() {
    return this.http.get(this.api);
  }

  obtenerPelicula(id: String) {
    return this.http.get(`${this.api}/${id}`);
  }

  ingresarPelicula(pelicula: Pelicula) {
    return this.http.post(this.api, pelicula);
  }

  eliminarPelicula(id: any) {
    return this.http.delete(`${this.api}/${id}`);
  }

  actualizarPelicula(id: any, pelicula: Pelicula) {
    return this.http.put(`${this.api}/${id}`, pelicula);
  }
}

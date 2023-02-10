import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { AlertController, NavController } from '@ionic/angular';
import { Pelicula } from '../models/movie';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  peliculas: any = [];

  constructor(
    private movieService: MovieService,
    private alertController: AlertController,
    private navController: NavController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.cargarPeliculas();
  }

  cargarPeliculas() {
    this.movieService.obtenerPeliculas().subscribe(
      (res) => {
        this.peliculas = res;
      }, (err) => console.log(err)
    )
  }

  async eliminarPelicula(pelicula: Pelicula) {
    const alert = await this.alertController.create(
      {
        header: 'Eliminar curso',
        message: `¿Está seguro de eliminar la película ${pelicula.title}?`,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.movieService.eliminarPelicula(pelicula._id).subscribe(
                (res) => {
                  this.cargarPeliculas()
                },
                (err) => console.log(err)
              )
            }
          },
          'Cancelar'
        ]
      }
    )
    alert.present()
  }

  abrirFormulario(pelicula: Pelicula) {
    this.navController.navigateForward(['/registro', pelicula._id])
  }

  abrirFormularioRegistro(){
    this.navController.navigateForward(['/registro', 'nuevo'])
  }

}

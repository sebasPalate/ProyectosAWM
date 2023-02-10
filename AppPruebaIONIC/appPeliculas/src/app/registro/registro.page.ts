import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../models/movie';
import { ActionSheetController, IonModal, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  presentingElement: any = undefined;


  id: any = "";

  pelicula: any = {
    title: "",
    description: "",
    category: "",
    year: "",
    image: ""
  }

  constructor(
    private movieService: MovieService,
    private route: Router,
    private router: ActivatedRoute,
    private toastController: ToastController,

    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');


    let id = this.router.snapshot.paramMap.get('_id');
    this.id = id;
    console.log(id);
    this.cargarPelicula();
  }

  registrarPelicula(pelicula: Pelicula) {
    if (this.id != "nuevo") {
      this.movieService.actualizarPelicula(this.id, pelicula).subscribe(
        res => {
          console.log(res);
          this.presentUpdate("bottom");
          this.route.navigate(['/peliculas']);
        },
        err => console.log(err)
      );
    }
    this.movieService.ingresarPelicula(pelicula).subscribe(
      res => {
        console.log(res);
        this.presentNew("bottom");
        this.route.navigate(['/peliculas']);
      },
      err => console.log(err)
    );
  }

  cargarPelicula() {
    this.movieService.obtenerPelicula(this.id).subscribe(
      res => {
        this.pelicula = res;
      },
      err => console.log(err)
    );
  }

  // Mensajes
  async presentUpdate(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Pelicula Actualizada!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async presentNew(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Pelicula Insertada!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }


  // Para la vista




  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };


}

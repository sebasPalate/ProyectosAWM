import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Curso } from '../models/course';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos: any = [];
  constructor(
    private courseService: CourseService,
    private alertController: AlertController,
    private navController: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.cargarCursos()
  }

  cargarCursos() {
    this.courseService.obtenerCursos().subscribe(
      (res) => {
        this.cursos = res;
      }, (err) => console.log(err)
    )
  }

  async eliminarCurso(curso: Curso) {
    const alert = await this.alertController.create(
      {
        header: 'Eliminar curso',
        message: `¿Está seguro de eliminar el curso ${curso.name}?`,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.courseService.eliminarCurso(curso._id).subscribe(
                (res) => {
                  this.cargarCursos()
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

/*   async editarCurso(curso: Curso) {
    this.route.navigate(['/registro'], { queryParams: curso })

    this.courseService.actualizarCurso(curso._id, curso).subscribe(
      (res) => {
        this.cursos = res;
      }, (err) => console.log(err)
    )
  } */

  abrirFormulario(curso: Curso) {
    this.navController.navigateForward(['/registro', curso._id])
  }

  abrirFormularioRegistro(){
    this.navController.navigateForward(['/registro', 'nuevo'])
  }
}


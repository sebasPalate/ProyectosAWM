import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Curso } from '../models/course';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos: any = [];
  constructor(private courseService: CourseService,
    private alertController: AlertController) { }

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
}

import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/course';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  id: any = "";

  curso: any = {
    name: "",
    subtitle: "",
    duration: "",
    description: "",
    urlImage: ""
  }
  constructor(
    private courseService: CourseService,
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('_id');
    this.id = id;
    console.log(id);
    this.cargarCurso();
  }

  /*  registrarCurso(curso: Curso) {
     this.courseService.ingresarCurso(curso).subscribe(
       (res) => this.route.navigate(["/cursos"]),
       (err) => console.log(err)
     )
   } */

   registrarCurso(curso:Curso){
    if (this.id != "nuevo") {
      this.courseService.actualizarCurso(this.id, curso).subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/cursos']);
        },
        err => console.log(err)
      );
    }
    this.courseService.ingresarCurso(curso).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/cursos']);
      },
      err => console.log(err)
    );
  }

  cargarCurso() {
    this.courseService.obtenerCurso(this.id).subscribe(
      res => {
        this.curso = res;
      },
      err => console.log(err)
    );
  }

 /*  actualizarCurso(curso: Curso) {
    this.courseService.actualizarCurso(curso._id, curso).subscribe(
      (res) => this.route.navigate(["/cursos"]),
      (err) => console.log(err)
    )
  } */

}

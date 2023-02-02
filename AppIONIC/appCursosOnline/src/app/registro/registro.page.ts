import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/course';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  curso: Curso = {
    name: "",
    subtitle: "",
    duration: "",
    description: "",
    urlImage: ""
  }
  constructor(private courseService: CourseService, private route: Router) { }

  ngOnInit() {
  }

  registrarCurso(curso: Curso) {
    this.courseService.ingresarCurso(curso).subscribe(
      (res) => this.route.navigate(["/cursos"]),
      (err) => console.log(err)
    )
  }

}

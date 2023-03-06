import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Matricula } from 'src/app/models/matricula.model';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'pal-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() evento = new EventEmitter<any>();
  form: FormGroup;

  constructor(private servicio: MatriculaService) {
    this.form = new FormGroup({
      marca: new FormControl(''),
      modelo: new FormControl(''),
      color: new FormControl(''),
      placa: new FormControl(''),
/*       fecha: new FormControl('')
 */    });
  }

  onEvento() {
    this.evento.emit();
  }

  ngOnInit(): void { }

  loadMatricula(row: any) {
    this.form.setValue({
      marca: row.marca,
      modelo: row.modelo,
      color: row.color,
      placa: row.placa,
/*       fecha: row.fecha,
 */    })
  }

  onSubmit() {
    const matricula: Matricula = {
      marca: this.form.get('marca')?.value,
      modelo: this.form.get('modelo')?.value,
      color: this.form.get('color')?.value,
      placa: this.form.get('placa')?.value,
/*       fecha: this.form.get('fecha')?.value,
 */    }
    this.servicio.createMatricula(matricula).subscribe(() => {
      this.onEvento();
      this.form.reset();
    });

  }

  onclick() {
    const matricula: Matricula = {
      marca: this.form.value.marca,
      modelo: this.form.value.modelo,
      color: this.form.value.color,
      placa: this.form.value.placa,
/*       fecha: this.form.value.fecha,
 */    }
    console.log(this.servicio.createMatricula(matricula).subscribe(() => {
      this.servicio.loadMatriculas();
    }));
  }


}

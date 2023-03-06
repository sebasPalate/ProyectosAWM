import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MetaDataColumn } from 'src/app/interfaces/metacolumns.interface';
import { MatriculaService } from 'src/app/services/matricula.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'pal-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.css']
})
export class PagePrincipalComponent implements OnInit {

  @Output() evento = new EventEmitter<any>();

  data: any[] = []
  records: any[] = []
  totalRecords = this.data.length
  metaDataColumns: MetaDataColumn[] = []

  constructor(private servicio: MatriculaService, private snackBar: MatSnackBar) {
    this.records = this.servicio.getRecords()
    this.metaDataColumns = this.servicio.getMetaDataColumns()
    this.loadMatriculas()
  }

  onEvento(row: any) {
    this.evento.emit(row);
  }

  recargar() {
    this.loadMatriculas()
  }

  onSubmit() {
    console.log("hello");
  }

  loadMatriculas() {
    console.log(this.servicio.loadMatriculas().subscribe((data: any) => {
      this.records = data
      this.totalRecords = this.records.length
      this.changePage(0)
    }, (error) => {
      console.log(error)
    }))
  }

  loadExamen() { }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    this.data = this.records.slice(skip, skip + pageSize);
  }

  showMessage(message: string, duration: number = 5000) {
    this.snackBar.open(message, '', { duration });
  }

  delete(row: any) {
    this.servicio.deleteMatricula(row._id).subscribe(() => {
      this.loadMatriculas();
      this.showMessage("Matricula Eliminada");
    });
  }

  onclick() {
    console.log("hello");
  }

  ngOnInit(): void { }

}

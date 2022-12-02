import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'cmv-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  // Añadido
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();
  @Input() length!: number;
  pageSize = environment.PAGE_SIZE;
  currentPage = 0;
  // Fin

  constructor() { }

  ngOnInit(): void {
  }

  // Añadido
  // Cambia la página actual
  changePage(event: any) {
    this.currentPage = event.pageIndex ?? event.value;
    this.onChangePage.emit(this.currentPage);
  }
  // Fin
}

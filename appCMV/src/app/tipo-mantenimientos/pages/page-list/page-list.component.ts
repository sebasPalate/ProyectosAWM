import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/share/interfaces/metacolumn.interfaces';

@Component({
  selector: 'cmv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  // Añadido 
  records: any[] = [
    { _id: 1, type: 'Preventivo', mecanic: 'Juan Perez', description: 'Cambio de aceite' },
    { _id: 2, type: 'Correctivo', mecanic: 'Pedro Lopez', description: 'Cambio de llantas' },
    { _id: 3, type: 'Preventivo', mecanic: 'Maria Garcia', description: 'Cambio de aceite' },
    { _id: 4, type: 'Predictivo', mecanic: 'Jose Rodriguez', description: 'Revision del Motor' },
    { _id: 5, type: 'Correctivo', mecanic: 'Juan Perez', description: 'Cambio de llantas' },
    { _id: 6, type: 'Preventivo', mecanic: 'Pedro Lopez', description: 'Cambio de aceite' },
    { _id: 7, type: 'Predictivo', mecanic: 'Maria Garcia', description: 'Revision del Motor' },
    { _id: 8, type: 'Correctivo', mecanic: 'Jose Rodriguez', description: 'Cambio de llantas' },
    { _id: 9, type: 'Preventivo', mecanic: 'Juan Perez', description: 'Cambio de aceite' },
    { _id: 10, type: 'Predictivo', mecanic: 'Pedro Lopez', description: 'Revision del Motor' },
    { _id: 11, type: 'Correctivo', mecanic: 'Maria Garcia', description: 'Cambio de llantas' },
    { _id: 12, type: 'Preventivo', mecanic: 'Jose Rodriguez', description: 'Cambio de aceite' },
    { _id: 13, type: 'Predictivo', mecanic: 'Juan Perez', description: 'Revision del Motor' },
    { _id: 14, type: 'Correctivo', mecanic: 'Pedro Lopez', description: 'Cambio de llantas' },
    { _id: 15, type: 'Preventivo', mecanic: 'Maria Garcia', description: 'Cambio de aceite' },
    { _id: 16, type: 'Predictivo', mecanic: 'Jose Rodriguez', description: 'Revision del Motor' },
    { _id: 17, type: 'Correctivo', mecanic: 'Juan Perez', description: 'Cambio de llantas' },
    { _id: 18, type: 'Preventivo', mecanic: 'Pedro Lopez', description: 'Cambio de aceite' },
    { _id: 19, type: 'Predictivo', mecanic: 'Maria Garcia', description: 'Revision del Motor' },
    { _id: 20, type: 'Correctivo', mecanic: 'Jose Rodriguez', description: 'Cambio de llantas' }
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: '_id', title: 'CEDULA' },
    { field: 'type', title: 'TYPE' },
    { field: 'mecanic', title: 'MECÁNICO' },
    { field: 'description', title: 'DESCRIPCIÓN' },

  ];

  data: any[] = [];
  totalRecords = this.data.length;
  // Fin

  constructor() {
    this.loadMaintenance();
  }

  ngOnInit(): void {
  }

  loadMaintenance() {
    this.data = this.records;
    this.totalRecords = this.records.length;
  }

}

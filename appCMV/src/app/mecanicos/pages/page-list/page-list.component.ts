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
    { _id: 1, firstName: 'John', lastName: 'Doe', address: '123 Main St.', speciality: 'Automotriz' },
    { _id: 2, firstName: 'Mary', lastName: 'Smith', address: '456 Maple Ave.', speciality: 'Electronica' },
    { _id: 3, firstName: 'Bob', lastName: 'Johnson', address: '789 Elm St.', speciality: 'Maquinaria' },
    { _id: 4, firstName: 'Jane', lastName: 'Williams', address: '101 Park Ave.', speciality: 'Electronica' },
    { _id: 5, firstName: 'Bill', lastName: 'Jones', address: '202 Pine St.', speciality: 'Automotriz' },
    { _id: 6, firstName: 'Jack', lastName: 'Brown', address: '303 Oak St.', speciality: 'Maquinaria' },
    { _id: 7, firstName: 'Sue', lastName: 'Miller', address: '404 Cedar Ave.', speciality: 'Electronica' },
    { _id: 8, firstName: 'Karen', lastName: 'Davis', address: '505 Walnut St.', speciality: 'Automotriz' },
    { _id: 9, firstName: 'Mark', lastName: 'Wilson', address: '606 Vine St.', speciality: 'Maquinaria' },
    { _id: 10, firstName: 'Lisa', lastName: 'Moore', address: '707 Cherry St.', speciality: 'Electronica' },
    { _id: 11, firstName: 'Sandra', lastName: 'Taylor', address: '808 Maple', speciality: 'Automotriz' },
    { _id: 12, firstName: 'Henry', lastName: 'Adams', address: '909 Elm St.', speciality: 'Maquinaria' },
    { _id: 13, firstName: 'Patricia', lastName: 'White', address: '1010 Park Ave.', speciality: 'Electronica' },
    { _id: 14, firstName: 'Robert', lastName: 'Harris', address: '1111 Pine', speciality: 'Automotriz' },
    { _id: 15, firstName: 'Linda', lastName: 'Martin', address: '1212 Oak St.', speciality: 'Maquinaria' },
    { _id: 16, firstName: 'Barbara', lastName: 'Thompson', address: '1313 Cedar', speciality: 'Electronica' },
    { _id: 17, firstName: 'Elizabeth', lastName: 'Garcia', address: '1414 Walnut', speciality: 'Automotriz' },
    { _id: 18, firstName: 'James', lastName: 'Martinez', address: '1515 Vine St.', speciality: 'Maquinaria' },
    { _id: 19, firstName: 'Jennifer', lastName: 'Robinson', address: '1616 Cherry', speciality: 'Electronica' },
    { _id: 20, firstName: 'John', lastName: 'Clark', address: '1717 Maple St.', speciality: 'Automotriz' },
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: '_id', title: 'CEDULA' },
    { field: 'firstName', title: 'NOMBRE' },
    { field: 'lastName', title: 'APELLIDO' },
    { field: 'address', title: 'DIRECCION' },
    { field: 'speciality', title: 'ESPECIALIDAD' },

  ];

  data: any[] = [];
  totalRecords = this.data.length;
  // Fin

  constructor() {
    this.loadMecanics();
  }

  ngOnInit(): void {
  }

  loadMecanics() {
    this.data = this.records;
    this.totalRecords = this.records.length;
  }

}

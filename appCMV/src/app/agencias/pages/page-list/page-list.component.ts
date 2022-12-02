import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DownloadComponent } from 'src/app/share/components/download/download.component';
import { KeypadButton } from 'src/app/share/interfaces/keypad.interface';
import { MetaDataColumn } from 'src/app/share/interfaces/metacolumn.interfaces';
import { environment } from 'src/environments/environment';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AgencyServiceService } from 'src/app/services/agency.service';
import { AgenciaService } from '../../services/agencia.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FomrComponent } from '../../components/fomr/fomr.component';
import { MatSnackBar } from '@angular/material/snack-bar';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'cmv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  // Añadido
  records: any[] = [
    { _id: 1, name: 'Ambato', address: 'Calle A' },
    { _id: 2, name: 'Riobamba', address: 'Calle B' },
    { _id: 3, name: 'Quito', address: 'Calle C' },
    { _id: 4, name: 'Cuenca', address: 'Calle D' },
    { _id: 5, name: 'Guayaquil', address: 'Calle E' },
    { _id: 6, name: 'Ambato', address: 'Calle A' },
    { _id: 7, name: 'Riobamba', address: 'Calle B' },
    { _id: 8, name: 'Quito', address: 'Calle C' },
    { _id: 9, name: 'Cuenca', address: 'Calle D' },
    { _id: 10, name: 'Guayaquil', address: 'Calle E' },
    { _id: 11, name: 'Ambato', address: 'Calle A' },
    { _id: 12, name: 'Riobamba', address: 'Calle B' },
    { _id: 13, name: 'Quito', address: 'Calle C' },
    { _id: 14, name: 'Cuenca', address: 'Calle D' },
    { _id: 15, name: 'Guayaquil', address: 'Calle E' },
    { _id: 16, name: 'Ambato', address: 'Calle A' },
    { _id: 17, name: 'Riobamba', address: 'Calle B' },
    { _id: 18, name: 'Quito', address: 'Calle C' },
    { _id: 19, name: 'Cuenca', address: 'Calle D' },
    { _id: 20, name: 'Guayaquil', address: 'Calle E' },
  ]

  metaDataColumns: MetaDataColumn[] = [
    { field: '_id', title: 'ID' },
    { field: 'name', title: 'AGENCIA' },
    { field: 'address', title: 'DIRECCION' }
  ]

  data: any[] = [];
  totalRecords = this.data.length;

  keypadButtons: KeypadButton[] = [
    { icon: 'cloud_dowload', tooltip: 'EXPORTAR', color: 'accent', action: 'DOWNLOAD' },
    { icon: 'add', tooltip: 'AGREGAR', color: 'primary', action: 'NEW' }
  ];
  // Fin

  constructor(private bottonSheet: MatBottomSheet,
    private agenciaService: AgenciaService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar) {
    this.loadAgencies();
  }

  ngOnInit(): void {
  }

  // Añadido
  loadAgencies() {
    /* 
    Data Estática
    this.data = this.records;
    this.totalRecords = this.records.length;
    this.changePage(0); */

    // Data Dinámica
    this.agenciaService.loadAgencies().subscribe(data => {
      this.records = data;
      this.totalRecords = this.records.length;
      this.changePage(0);
    }, error => { console.log("Error al cargar la data") });

  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = page * pageSize;
    this.data = this.records.slice(skip, skip + pageSize);
  }

  openForm(row: any = null) {
    const options = {
      panelClass: 'panel-container',
      disableClose: true,
      data: row
    };
    const reference: MatDialogRef<FomrComponent> = this.dialog.open(FomrComponent, options);
    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }
      if (response.id) {
        const agencia = { ...response };
        this.agenciaService.updateAgency(response.id, agencia).subscribe(() => {
          this.loadAgencies();
          this.showMessage('Registro actualizado');
        })
      } else {
        const agencia = { ...response };
        this.agenciaService.addAgency(agencia).subscribe(() => {
          this.loadAgencies();
          this.showMessage('Registro exitoso');
        })
      }
    });

  }

  delete(id: any) {
    this.agenciaService.deleteAgency(id).subscribe(() => {
      this.loadAgencies();
      this.showMessage('Registro Elimiacion Exitosa');
    })
  }

  doAction(action: string) {
    switch (action) {
      case 'DOWNLOAD':
        this.showBottonSheet('Lista de Agencias', 'Agencias', this.records, this.metaDataColumns);
        break;

      case 'NEW':
        this.openForm();
        break;
    }
  };

  showBottonSheet(title: string, fileName: string, data: any, header: any) {
    this.bottonSheet.open(DownloadComponent);
    DownloadComponent.title = title;
    DownloadComponent.fileName = fileName;
    DownloadComponent.data = data;
    DownloadComponent.header = header;
  }

  showMessage(message: string, duration: number = 5000) {
    this.snackbar.open(message, '', { duration });
  }

  /*  openPdpTables() {
     const documentDefinition = {
       content: [
         {
           table: {
             headerRows: 1,
             widths: ['*', '*', '*'],
             body: [
               [this.metaDataColumns[0].title, this.metaDataColumns[1].title, this.metaDataColumns[2].title],
               ...this.records.map((item) => [item._id, item.name, item.address])
             ]
           }
         }
       ]
     };
     pdfMake.createPdf(documentDefinition).open();
     // Fin
 
   } */
}

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
    { _id: 1, name: 'Facebook', description: 'Red Social' },
    { _id: 2, name: 'Twiter', description: 'Red Social' },
    { _id: 3, name: 'WhatsApp', description: 'Red Social' },
    { _id: 4, name: 'Linkedin', description: 'Red Social' },
    { _id: 5, name: 'YouTube', description: 'Red Social' },
    { _id: 6, name: 'Messenger', description: 'Red Social' },
    { _id: 7, name: 'Instagram', description: 'Red Social' },
    { _id: 8, name: 'Tumblr', description: 'Red Social' },
    { _id: 9, name: 'WeChat', description: 'Red Social' },
    { _id: 10, name: 'Telegram', description: 'Red Social' },
    { _id: 11, name: 'Vkontakte', description: 'Red Social' },
    { _id: 12, name: 'Hi5', description: 'Red Social' },
    { _id: 13, name: 'Daily Motion', description: 'Red Social' },
    { _id: 14, name: 'Spotify', description: 'Red Social' },
    { _id: 15, name: 'Slideshare', description: 'Red Social' },
    { _id: 16, name: 'Qzone', description: 'Red Social' },
    { _id: 17, name: 'Match', description: 'Red Social' },
    { _id: 18, name: 'Pinterest', description: 'Red Social' },
    { _id: 19, name: 'Snapchat', description: 'Red Social' },
    { _id: 20, name: 'Reddit', description: 'Red Social' },
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: '_id', title: 'ID' },
    { field: 'name', title: 'CANAL' },
    { field: 'description', title: 'DESCRIPCION' }
  ];

  data: any[] = [];
  totalRecords = this.data.length;
  // Fin

  constructor() {
    this.loadChannels();
  }

  ngOnInit(): void {
  }

  // Añadido
  loadChannels() {
    this.data = this.records;
    this.totalRecords = this.records.length;
  }
  // Fin

}

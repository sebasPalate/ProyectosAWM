import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ShareModule
  ]
})
export class ClientesModule { }

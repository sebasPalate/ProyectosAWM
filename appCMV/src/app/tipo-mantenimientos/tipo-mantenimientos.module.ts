import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoMantenimientosRoutingModule } from './tipo-mantenimientos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    TipoMantenimientosRoutingModule,
    ShareModule
  ]
})
export class TipoMantenimientosModule { }

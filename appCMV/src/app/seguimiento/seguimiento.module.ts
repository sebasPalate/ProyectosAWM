import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguimientoRoutingModule } from './seguimiento-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    SeguimientoRoutingModule,
    ShareModule
  ]
})
export class SeguimientoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciasRoutingModule } from './agencias-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { ShareModule } from '../share/share.module';
import { FomrComponent } from './components/fomr/fomr.component';


@NgModule({
  declarations: [
    PageListComponent,
    FomrComponent
  ],
  imports: [
    CommonModule,
    AgenciasRoutingModule,
    ShareModule,
  ]
})
export class AgenciasModule { }

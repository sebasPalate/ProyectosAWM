import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MecanicosRoutingModule } from './mecanicos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    MecanicosRoutingModule,
    ShareModule
  ]
})
export class MecanicosModule { }

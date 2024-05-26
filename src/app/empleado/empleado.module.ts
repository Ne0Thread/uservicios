import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { ListaReservadosPagesComponent } from './pages/lista-reservados-pages/lista-reservados-pages.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListaReservadosPagesComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    MaterialModule
  ]
})
export class EmpleadoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UServiciosRoutingModule } from './u-servicios-routing.module';
import { UserviciosPageComponent } from './pages/uservicios-page/uservicios-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ServicesTableComponent } from './components/services-table/services-table.component';
import { NewRecursoPagesComponent } from './pages/new-recurso-pages/new-recurso-pages.component';
import { ContratarPageComponent } from './pages/contratar-page/contratar-page.component';
import { PrestamosPageComponent } from './pages/prestamos-page/prestamos-page.component';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule



@NgModule({
  declarations: [
    UserviciosPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    LayoutPageComponent,
    ServicesTableComponent,
    NewRecursoPagesComponent,
    ContratarPageComponent,
    PrestamosPageComponent
  ],
  imports: [
    CommonModule,
    UServiciosRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class UServiciosModule { }

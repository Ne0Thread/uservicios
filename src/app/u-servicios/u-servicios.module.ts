import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UServiciosRoutingModule } from './u-servicios-routing.module';
import { UserviciosPageComponent } from './pages/uservicios-page/uservicios-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule({
  declarations: [
    UserviciosPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    UServiciosRoutingModule,
    MaterialModule
  ]
})
export class UServiciosModule { }

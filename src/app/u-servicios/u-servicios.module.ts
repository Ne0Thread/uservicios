import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UServiciosRoutingModule } from './u-servicios-routing.module';
import { UserviciosPageComponent } from './pages/uservicios-page/uservicios-page.component';


@NgModule({
  declarations: [
    UserviciosPageComponent
  ],
  imports: [
    CommonModule,
    UServiciosRoutingModule
  ]
})
export class UServiciosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminServiciosRoutingModule } from './admin-servicios-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { UndServPageComponent } from './pages/und-serv-page/und-serv-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { GerentesPageComponent } from './pages/gerentes-page/gerentes-page.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { GerentesTableComponent } from './components/gerentes-table/gerentes-table.component';
import { UServiciosTableComponent } from './components/u-servicios-table/u-servicios-table.component';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';
import { FormAddServComponent } from './components/form-add-serv/form-add-serv.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    UndServPageComponent,
    UsersPageComponent,
    GerentesPageComponent,
    UsersTableComponent,
    GerentesTableComponent,
    UServiciosTableComponent,
    FormAddUserComponent,
    FormAddServComponent
  ],
  imports: [
    CommonModule,
    AdminServiciosRoutingModule,
    MaterialModule
  ]
})
export class AdminServiciosModule { }

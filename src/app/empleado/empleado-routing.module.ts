import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReservadosPagesComponent } from './pages/lista-reservados-pages/lista-reservados-pages.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'listaReservados',
        component: ListaReservadosPagesComponent,
      },
      {
        path: '**',
        redirectTo: 'listaReservados'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }

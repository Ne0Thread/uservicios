import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserviciosPageComponent } from './pages/uservicios-page/uservicios-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children: [
      {
        path:'new-uservice',
        component: NewPageComponent
      },
      {
        path:'search',
        component: SearchPageComponent
      },
      {
        path:'edit/:id',
        component: NewPageComponent
      },
      {
        path:'list',
        component:ListPageComponent
      },
      {
        path:':id',
        component: UserviciosPageComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UServiciosRoutingModule { }

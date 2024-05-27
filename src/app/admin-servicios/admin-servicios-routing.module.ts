import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { UndServPageComponent } from './pages/und-serv-page/und-serv-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { GerentesPageComponent } from './pages/gerentes-page/gerentes-page.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children:[
      {
        path: 'unSer-list',
        component:UndServPageComponent
      },
      {
        path: 'users-list',
        component:UsersPageComponent
      },
      {
        path: 'ger-list',
        component:GerentesPageComponent
      },
      {
        path: '**',
        redirectTo:'unSer-list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminServiciosRoutingModule { }

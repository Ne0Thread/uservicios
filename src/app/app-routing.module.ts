import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './auth/pages/layout-page/layout-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  //localhost:4200/auth/
  {
   path:'auth',
   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path:'u-servicios',
    loadChildren: () => import('./u-servicios/u-servicios.module').then(m => m.UServiciosModule),
  },
  {
    path:'404',
    component: Error404PageComponent,
  },
  {
    path:'',
    redirectTo:'u-servicios',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

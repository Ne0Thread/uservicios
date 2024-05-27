import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sideBarItems=[
    {label:'Unidades de Servicio', icon:'supportAgent',url: './unSer-list'},
    {label:'Usuarios', icon:'group', url: './users-list'},
    {label:'Gerentes', icon:'shield_person', url: './ger-list'}
  ]
}

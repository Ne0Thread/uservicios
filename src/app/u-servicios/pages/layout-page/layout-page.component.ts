import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sideBarItems=[
    {label:'Listado', icon:'list',url: './list'},
    {label:'Añadir Unidad', icon:'add', url: './new-uservice'}
  ]


}

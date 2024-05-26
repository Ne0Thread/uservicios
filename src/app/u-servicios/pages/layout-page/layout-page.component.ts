import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sideBarItems=[
    {label:'Recursos', icon:'list',url: './list'},
    {label:'Añadir Tipo', icon:'add', url: './new-uservice'},
    {label:'Añadir Recurso', icon:'add', url: './new-resource'},
    {label:'Contratar', icon:'person_add', url: './contratar'},
    {label:'Prestamos', icon:'list', url: './prestamos'}
  ]
}

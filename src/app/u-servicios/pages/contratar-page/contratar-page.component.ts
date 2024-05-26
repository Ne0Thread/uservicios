import { Component } from '@angular/core';


interface unidad {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contratar-page',
  templateUrl: './contratar-page.component.html',
  styles: ``
})
export class ContratarPageComponent {
  unidades: unidad[] = [
    {value: 'unidad-0', viewValue: 'Unidad1'},
    {value: 'unidad-1', viewValue: 'Unidad2'},
    {value: 'unidad-2', viewValue: 'Unidad3'},
  ];

}

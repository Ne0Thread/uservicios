import { Component, OnInit } from '@angular/core';
import { UnidadServicio } from '../../interfaces/unidadServicio.interface';
import { U_Servicio_Service } from '../../services/unidadServicio.service';


@Component({
  selector: 'u-servicios-table',
  templateUrl: './u-servicios-table.component.html',
  styles: ``
})
export class UServiciosTableComponent implements OnInit {

  public servicios: UnidadServicio[] = [];

  constructor (private unSerService: U_Servicio_Service){}

  ngOnInit(): void {
      this.unSerService.getUnidadesDeServicio().subscribe(unidadesdeservicio =>this.servicios=unidadesdeservicio);
  }

}

import { Component, OnInit } from '@angular/core';
import { Recurso } from '../../interfaces/recurso.interface';
import { RecursoService } from '../../services/recursos.service';

@Component({
  selector: 'services-table',
  templateUrl: './services-table.component.html',
  styles: ``,
})
export class ServicesTableComponent implements OnInit {
  public recursos: Recurso[] = [];

  constructor(private recursoService: RecursoService) {}

  ngOnInit(): void {
    const token: string|null = localStorage.getItem("token");
    this.recursoService.getRecursos(token).subscribe((re) => (this.recursos = re));
    console.log(this.recursos);
  }
}

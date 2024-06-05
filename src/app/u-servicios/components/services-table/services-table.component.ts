import { Component, OnInit } from '@angular/core';
import { Recurso } from '../../interfaces/recurso.interface';
import { RecursoService } from '../../services/recursos.service';

@Component({
  selector: 'services-table',
  templateUrl: './services-table.component.html',
})
export class ServicesTableComponent implements OnInit {
  public recursos: Recurso[] = [];

  constructor(private recursoService: RecursoService) {}

  ngOnInit(): void {
    const token: string | null = localStorage.getItem('token');
    if (token) {
      this.recursoService.getRecursos(token).subscribe({
        next: (re) => {
          this.recursos = re;
          console.log(this.recursos);
        },
        error: (err) => {
          console.error('Error al obtener recursos:', err);
        }
      });
    } else {
      console.error('No se encontró el token en el almacenamiento local.');
    }
  }
}

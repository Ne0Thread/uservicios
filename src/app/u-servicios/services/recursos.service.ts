import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recurso } from '../interfaces/recurso.interface';
import { envionments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  private baseUrl: string = envionments.baseUrl; // Corrige el nombre del objeto de entorno

  constructor(private http: HttpClient) { }

  getRecursos(token: string | null): Observable<Recurso[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}` // Asegúrate de que el token tiene el prefijo 'Bearer'
    });
    return this.http.get<Recurso[]>(`${this.baseUrl}/resource`, { headers });
  }
}

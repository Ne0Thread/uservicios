import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadServicio } from '../interfaces/unidadServicio.interface';
import { UnidadRegistro } from '../interfaces/unidadRegistro.interface';
import { envionments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class U_Servicio_Service {
  private baseUrl: string = envionments.baseUrl;

  constructor(private http: HttpClient) {}

  getUnidadesDeServicio(): Observable<UnidadServicio[]> {
    return this.http.get<UnidadServicio[]>(`${this.baseUrl}/serviceunit`);
  }

  createUnidad(nuevaUnidad: UnidadRegistro, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.post<any>(`${this.baseUrl}/serviceunit`, nuevaUnidad, { headers });
  }
}

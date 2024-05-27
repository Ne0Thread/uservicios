import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadServicio } from '../interfaces/unidadServicio.interface';
import { envionments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class U_Servicio_Service {
  private baseUrl: string = envionments.baseUrl;

  constructor(private http: HttpClient) {}

  getUnidadesDeServicio(): Observable<UnidadServicio[]> {
    return this.http.get<UnidadServicio[]>(`${this.baseUrl}/serviceunit`);
  }
}

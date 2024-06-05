import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recurso } from '../interfaces/recurso.interface';
import { envionments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})

export class RecursoService {
  private baseUrl: string = envionments.baseUrl;

  constructor(private http: HttpClient) { }

  getRecursos(token: string|null): Observable<Recurso[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.get<Recurso[]>(`${this.baseUrl}/resource`,{headers});
  }
}

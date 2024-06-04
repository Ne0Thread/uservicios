import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuarios.interface';
import { envionments } from '../../../environments/environments';
import { UsuarioRegistro } from '../interfaces/usuarioRegistro.interface';

@Injectable({providedIn: 'root'})
export class Usuario_Service {  

  private baseUrl: string = envionments.baseUrl;

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.baseUrl}/users`);
  }
  createUsuario(usuario:UsuarioRegistro):Observable<UsuarioRegistro>{
    return this.http.post<UsuarioRegistro>(`${this.baseUrl}/signup`,usuario);
  }
}

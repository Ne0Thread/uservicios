import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { envionments } from '../../../environments/environments';
import { UserLogin } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = envionments.baseUrl;
  private user?: UserLogin;

  constructor(private http: HttpClient) {}

  get currentUser(): UserLogin | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(username: string, password: string): Observable<UserLogin> {
    const datalog = { username, password };
    return this.http.post<UserLogin>(`${this.baseUrl}/signin`, datalog).pipe(
      tap((user) => (this.user = user)),
      tap((user) => localStorage.setItem('token', user.token.toString())),
      tap((user) => localStorage.setItem('username', user.username.toString())),
      tap((user) => localStorage.setItem('rol', user.rol.toString())),
      tap((user) =>
        localStorage.setItem('serviceUnitId', user.serviceUnitId.toString())
      ),
      tap((user) => localStorage.setItem('pass', datalog.password.toString())),
      catchError((error) => {
        console.error('Error en el logueo!!', error);
        return throwError(error);
      })
    );
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('pass');
    const datalog = { username, password };

    if (!token) {
      return of(false);
    }
    return of(true);
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}

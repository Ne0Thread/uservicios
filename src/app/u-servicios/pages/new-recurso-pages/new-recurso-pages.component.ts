import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface Tipos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-recurso-pages',
  templateUrl: './new-recurso-pages.component.html',

})
export class NewRecursoPagesComponent implements OnInit {
  resourceForm!: FormGroup;
  tipo: Tipos[] = [
    { value: 'tipo-0', viewValue: 'Salon' },
    { value: 'tipo-1', viewValue: 'Herramienta' },
    { value: 'tipo-2', viewValue: 'Juego' },
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.resourceForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      resourceTypeID: ['', Validators.required], // Añadido el campo resourceTypeID
      serviceUnitID: ['', Validators.required] // Añadido el campo serviceUnitID
    });
  }

  addResource(): void {
    if (this.resourceForm.invalid) {
      return;
    }

    const resourceData = this.resourceForm.value;
    const authToken = 'your-auth-token'; // Reemplaza esto con el token real

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });

    this.http.post('/api/resource', resourceData, { headers })
      .pipe(
        catchError(this.handleError)
      )
      .subscribe(
        response => {
          console.log('Recurso creado exitosamente!', response);
        },
        (error: HttpErrorResponse) => {
          console.error('Error al crear el recurso', error);
          alert(`Error al crear el recurso: ${this.getErrorMessage(error)}`);
        }
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  private getErrorMessage(error: HttpErrorResponse): string {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      return error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      if (error.error && error.error.message) {
        return error.error.message;
      } else {
        return `Server returned code: ${error.status}, error message is: ${error.message}`;
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-reservar',
  templateUrl: './form-reservar.component.html',
})
export class FormReservarComponent implements OnInit {
  reservarForm: FormGroup;
  token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sIjoiYWRtaW4iLCJpYXQiOjE3MTc1NTYwMTcsImV4cCI6MTcxNzU1OTYxN30.RxzyCQ9LlW6mvoTI-y7_GAt7Y0HP3f0qzvK-Bb3m2_g'; // Token JWT

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.reservarForm = this.fb.group({
      resourceId: ['', Validators.required],
      userId: ['', Validators.required],
      date: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Si necesitas hacer algo más en ngOnInit, puedes dejarlo vacío o agregar lógica adicional
  }

  formatTime(time: string): string {
    // Asegurarnos de que el tiempo esté en formato HH:mm:ss
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes}:00`;
  }

  formatDate(date: string): string {
    // Asegurarnos de que la fecha esté en formato yyyy-MM-dd
    const [year, month, day] = date.split('-');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }

  bookResource(): void {
    if (this.reservarForm.valid) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
      const resourceId = this.reservarForm.value.resourceId;

      const body = {
        userId: this.reservarForm.value.userId,
        date: this.formatDate(this.reservarForm.value.date),
        start: this.formatTime(this.reservarForm.value.start),
        end: this.formatTime(this.reservarForm.value.end)
      };

      this.http.post(`http://localhost:8080/resource/${resourceId}/book`, body, { headers })
        .subscribe({
          next: (response) => {
            console.log('Resource booked successfully:', response);
            alert('Recurso reservado con éxito');
          },
          error: (err) => {
            console.error('Error booking resource:', err);
            alert('Error al reservar el recurso: ' + JSON.stringify(err));
          }
        });
    } else {
      console.log('Formulario inválido');
    }
  }
}

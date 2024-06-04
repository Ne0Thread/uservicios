import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { U_Servicio_Service } from '../../services/unidadServicio.service';
import { UnidadRegistro } from '../../interfaces/unidadRegistro.interface';

@Component({
  selector: 'app-form-add-serv',
  templateUrl: './form-add-serv.component.html',
  styles: []
})
export class FormAddServComponent {

  unidadForm: FormGroup;
  token: string = 'token';

  constructor(private serv: U_Servicio_Service, private fb: FormBuilder) {
    this.unidadForm = this.fb.group({
      nombreUnidad: ['', Validators.required],
      horarioInicio: ['', Validators.required],
      horarioFin: ['', Validators.required]
    });
    
  }

  get nombreUnidad() {
    return this.unidadForm.get('nombreUnidad');
  }

  get horarioInicio() {
    return this.unidadForm.get('horarioInicio');
  }

  get horarioFin() {
    return this.unidadForm.get('horarioFin');
  }

  formatTime(time: string): string {
    const date = new Date();
    const [hours, minutes] = time.split(':');
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    date.setSeconds(0);
    return date.toISOString().split('T')[1].substr(0, 8);
  }

  addUnidad() {
    if (this.unidadForm.valid) {
      console.log(this.unidadForm.value);      

      // objeto de la nueva unidad de servicio
      const nuevaUnidad: UnidadRegistro = {
        name : this.unidadForm.value.nombreUnidad,
        startWorkingHours: this.formatTime(this.unidadForm.value.horarioInicio),
        endWorkingHours: this.formatTime(this.unidadForm.value.horarioFin)
      };

      // Llamar al servicio para crear la unidad de servicio
      this.serv.createUnidad(nuevaUnidad, this.token).subscribe({
        next: (response) => {
          console.log('Unidad de servicio creada:', response);
          alert('Unidad Registrada con exito');
        },
        error: (err) => {
          console.error('Error al crear unidad de servicio:', JSON.stringify(err));
          alert('Error al registrar unidad: ' + JSON.stringify(err));
        },
      });

    } else {
      console.log('Formulario inválido');
    }
  }
}


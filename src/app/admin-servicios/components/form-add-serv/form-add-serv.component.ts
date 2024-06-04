import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { U_Servicio_Service } from '../../services/unidadServicio.service'; // Asegúrate de importar el servicio correcto
import { UnidadRegistro } from '../../interfaces/unidadRegistro.interface'; // Importa la interfaz correcta

@Component({
  selector: 'app-form-add-serv',
  templateUrl: './form-add-serv.component.html',
  styles: []
})
export class FormAddServComponent {

  unidadForm: FormGroup;
  token: string = 'token'; // Asegúrate de obtener y almacenar el token JWT correctamente

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

  // Función para convertir el valor del input de hora a cadena
  convertTimeToString(time: string): string {
    // Puedes ajustar el formato según tus necesidades, aquí simplemente se retorna el valor tal cual
    return time;
  }

  addUnidad() {
    if (this.unidadForm.valid) {
      console.log(this.unidadForm.value);

      // Convertir los valores de hora a cadenas
      const horarioInicioStr = this.convertTimeToString(this.unidadForm.value.horarioInicio);
      const horarioFinStr = this.convertTimeToString(this.unidadForm.value.horarioFin);

      // Crear el objeto de la nueva unidad de servicio
      const nuevaUnidad: UnidadRegistro = {
        nombre: this.unidadForm.value.nombreUnidad,
        horarioLaboralInicio: horarioInicioStr,
        horarioLaboralFin: horarioFinStr,
      };

      // Asegurarse de que el token no tiene espacios en blanco
      const cleanedToken = this.token.trim();

      // Depuración adicional
      console.log('Token JWT:', cleanedToken);
      console.log('Nueva Unidad:', JSON.stringify(nuevaUnidad));

      // Llamar al servicio para crear la unidad de servicio
      this.serv.createUnidad(nuevaUnidad, cleanedToken).subscribe({
        next: (response) => {
          console.log('Unidad de servicio creada:', response);
          alert('Unidad Registrada con exito');
          // Maneja la respuesta exitosa aquí, por ejemplo, mostrar un mensaje al usuario
        },
        error: (err) => {
          console.error('Error al crear unidad de servicio:', err);
          alert('Error al registrar unidad: ' + err.error);
          // Maneja el error aquí, por ejemplo, mostrar un mensaje de error al usuario
        },
      });

    } else {
      console.log('Formulario inválido');
    }
  }
}


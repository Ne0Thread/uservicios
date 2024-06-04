import { Component } from '@angular/core';
import { Usuario_Service } from '../../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styles: [],
})
export class FormAddUserComponent {
  usuarioForm: FormGroup;

  constructor(private user: Usuario_Service, private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get nombre() {
    return this.usuarioForm.get('nombre');
  }

  get contrasena() {
    return this.usuarioForm.get('contrasena');
  }

  get email() {
    return this.usuarioForm.get('email');
  }

  addUsuario() {
    if (this.usuarioForm.valid) {

      const nuevoUsuario = {
        username: this.usuarioForm.value.nombre,
        email: this.usuarioForm.value.email,
        password: this.usuarioForm.value.contrasena,
      };

      this.user.createUsuario(nuevoUsuario).subscribe({
        next: (usuario) => {
          console.log('Usuario creado:', usuario);
          alert('Usuario registrado exitosamente!');
        },
        error: (err) => {
          console.error('Error al crear usuario:', err);
          alert('Error al registrar usuario: ' + err.error);
        },
      });

    } else {
      console.log('Formulario inválido');
    }
  }
}

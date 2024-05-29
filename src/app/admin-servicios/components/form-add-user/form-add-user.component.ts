import { Component } from '@angular/core';
import { Usuario_Service } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/usuarios.interface';
import { UsuarioRegistro } from '../../interfaces/usuarioRegistro.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styles: ``,
})
export class FormAddUserComponent {

  usuarioForm: FormGroup;

  constructor(private user: Usuario_Service,private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      idUsuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      unidad: ['', Validators.required],
      cargo: ['', Validators.required]
    });
  }

  addUsuario() {
    if (this.usuarioForm.valid) {

      console.log(this.usuarioForm.value());
      const nuevoUsuario: UsuarioRegistro = {
        username: this.usuarioForm.get('idUsuario')?.value,
        email: this.usuarioForm.get('email')?.value,
        password: this.usuarioForm.get('contrasena')?.value,
      };

      this.user.createUsuario(nuevoUsuario).subscribe({
        next: (usuario) => {
          console.log('Usuario creado:', usuario);
          // Maneja la respuesta exitosa aquí
        },
        error: (err) => {
          console.error('Error al crear usuario:', err);
          // Maneja el error aquí
        },
      });

    }else{
      console.log('formulario invalido');
    }

  }
}

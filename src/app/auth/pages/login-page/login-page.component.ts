import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  loginError: boolean = false;
  usuario: string = '';
  contrasena: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbar:MatSnackBar
  ){}

  onLogin():void{

    this.authService.login(this.usuario,this.contrasena)
    .subscribe(user=>{
      const rol = localStorage.getItem('rol'); // Obtener el valor de "rol" del LocalStorage
      if (rol === 'admin') {
        this.router.navigate(['/admin']);
      } else if (rol === 'usuario') {
        this.router.navigate(['/u-servicios']);
      } else {
        // Si no hay un rol definido o es otro valor, redirigir a una ruta predeterminada
        this.router.navigate(['/u-servicios']);
      }

    },
    error => {
      // Si hay un error en el inicio de sesión, muestra un mensaje de error
      this.loginError = true;
      this.snackbar.open('Error: Nombre de usuario o contraseña incorrectos', 'Cerrar', {
        duration: 3000 // Duración del mensaje emergente en milisegundos
      });
    })
  }

}

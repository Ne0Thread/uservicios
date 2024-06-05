import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onLogin():void{
    this.authService.login('john@example.com','password123')
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
    })
  }

}

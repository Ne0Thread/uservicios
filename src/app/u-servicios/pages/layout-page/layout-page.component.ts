import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sideBarItems=[
    {label:'Recursos', icon:'list',url: './list'},
    {label:'Añadir Tipo', icon:'add', url: './new-uservice'},
    {label:'Añadir Recurso', icon:'add', url: './new-resource'},
    {label:'Contratar', icon:'person_add', url: './contratar'},
    {label:'Prestamos', icon:'list', url: './prestamos'}
  ]
  constructor(
    private authService:AuthService,
    private router: Router
  ){}

  get user():UserLogin |undefined {
    return this.authService.currentUser;
  }
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}

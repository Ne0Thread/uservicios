import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { UserLogin } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sideBarItems=[
    {label:'Unidades de Servicio', icon:'supportAgent',url: './unSer-list'},
    {label:'Usuarios', icon:'group', url: './users-list'},
    {label:'Gerentes', icon:'shield_person', url: './ger-list'}
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

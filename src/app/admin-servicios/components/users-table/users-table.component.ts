import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuarios.interface';
import { Usuario_Service } from '../../services/usuario.service';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styles: ``
})
export class UsersTableComponent implements OnInit{
  public usuarios: Usuario[] = [];

  constructor ( private user: Usuario_Service){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.user.getUsuarios().subscribe(user=>this.usuarios=user);

  }

}

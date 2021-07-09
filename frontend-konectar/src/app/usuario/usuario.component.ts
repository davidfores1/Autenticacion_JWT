import { Component, OnInit } from '@angular/core';
import { User } from '../modelos/usuario';
import { UsuarioService } from '../services/usuarioService'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  data: User[];
  actual_usuario: User;
  crud_operation = { is_new: false, is_visible: false }

  constructor(private service: UsuarioService) { 
    this.data = [];
  }

  ngOnInit(): void {

    this.service.read().subscribe(res => {
      this.data = res.json();
      this.actual_usuario = new User();
    });

  }

}

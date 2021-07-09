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

  new() {
    this.actual_usuario = new User();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  save() {
    if (this.crud_operation.is_new) {
      this.service.insert(this.actual_usuario).subscribe(res => {
        this.actual_usuario = new User();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      })

      return;
    }
      this.service.update(this.actual_usuario).subscribe(res => {
        this.actual_usuario = new User();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      })
    }

    edit(row:any) {

      this.crud_operation.is_visible = true;
      this.crud_operation.is_new = false;
      this.actual_usuario = row;
    }

    delete(id:any) {
      
        this.service.delete(id).subscribe(res => {
          this.crud_operation.is_new = false;
          this.ngOnInit();
        })

      }
  }


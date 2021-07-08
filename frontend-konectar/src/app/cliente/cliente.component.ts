import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  data: Cliente[];
  current_cliente: Cliente;
  crud_operation = { is_new: false, is_visible: false }

  constructor(private service: ClienteService) {
    this.data = [];
  }

  ngOnInit(): void {
    this.service.read().subscribe(res => {
      this.data = res.json();
      this.current_cliente = new Cliente();
    });
  }

  new() {
    this.current_cliente = new Cliente();
    this.crud_operation.is_visible = true;
  }

  save() {
    if (this.crud_operation.is_new) {
      this.service.insert(this.current_cliente).subscribe(res => {
        this.current_cliente = new Cliente();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      })

      return;
    }
      this.service.update(this.current_cliente).subscribe(res => {
        this.current_cliente = new Cliente();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      })
    }

    edit(row:any) {

      this.crud_operation.is_visible = true;
      this.crud_operation.is_new = false;
      this.current_cliente = row;
    }

    delete(id:any) {
      
        this.service.delete(id).subscribe(res => {
          this.crud_operation.is_new = false;
          this.ngOnInit();
        })

      }
  }


import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
 data:Cliente[];

  constructor(private http: Http) { }
  read(){
    return this.http.get('http://127.0.0.1:8000/clientes');
  }

  insert(data:Cliente){
    return this.http.post('http://127.0.0.1:8000/clientes', data);
  }

  update(data:Cliente){
    return this.http.put('http://127.0.0.1:8000/clientes/' + data.id, data);
  }

  delete(id: number){
    return this.http.delete('http://127.0.0.1:8000/clientes/' + id);
  }
}

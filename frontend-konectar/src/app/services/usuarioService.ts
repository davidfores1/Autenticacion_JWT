import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { User } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
 data:User[];

  constructor(private http: Http) { }
  read(query=''){
    return this.http.get('http://127.0.0.1:8000/usuarios',{params:{buscar:query}});
  }

  insert(data:User){
    return this.http.post('http://127.0.0.1:8000/usuarios',data);
  }

  update(data:User){
    return this.http.put('http://127.0.0.1:8000/usuarios/' + data.id, data);
  }

  delete(id: number){
    return this.http.delete('http://127.0.0.1:8000/usuarios/' + id);
  }
}
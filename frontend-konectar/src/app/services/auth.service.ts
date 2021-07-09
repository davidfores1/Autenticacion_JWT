import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { User } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data:User[];

  constructor(private http:HttpClient) { }

  read(){
    return this.http.get('http://127.0.0.1:8000/clientes');
  }

  registerUser(data:any){

    return this.http.post(environment.apiUrl + '/api/register/', data)

  }

  login(data:any){

    return this.http.post(environment.apiUrl + '/api/login/', data)

  }
}

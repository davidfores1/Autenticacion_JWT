import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  data:any;

  constructor(private formBuilder:FormBuilder, private usuarioService:UsuarioService, private toastrService:ToastrService) { }

  LoginForm(){

    this.form = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });

  }
  
  ngOnInit(): void {
    this.LoginForm();
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    this.usuarioService.login(this.form.value).subscribe(res=>{
    this.data = res;
    console.log(res);
    
    if(this.data.status ===1){

    }
    });
  }

}

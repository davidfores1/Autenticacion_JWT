import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsuarioService} from '../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form:FormGroup;
submitted = false;
data:any;

  constructor(private formBuilder:FormBuilder, private usuarioService:UsuarioService, private toastrService:ToastrService ) { }

  createForm(){

    this.form = this.formBuilder.group({
      name:[null,Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirm_password:['',Validators.required],
      id_rol:[null,Validators.required],
    });

  }

  ngOnInit(): void {
    this.createForm();
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    this.usuarioService.registerUser(this.form.value).subscribe(res=>{
      this.data = res;
      console.log(res);
      if(this.data.status === 1){
        this.toastrService.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        });
      }else{
        this.toastrService.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        });
      }
    });
  }


}

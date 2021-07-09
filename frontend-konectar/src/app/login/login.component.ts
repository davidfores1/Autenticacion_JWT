import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  data: any;
  token: any;

  constructor(private formBuilder: FormBuilder, private usuarioService: AuthService, private toastrService: ToastrService, private router: Router) { }

  LoginForm() {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  ngOnInit(): void {
    this.LoginForm();
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.usuarioService.login(this.form.value).subscribe(res => {
      this.data = res;
      console.log(res);

      if (this.data.status === 1) {
        this.token = this.data.data.token;
        localStorage.setItem('token',this.token);
        this.router.navigate(['/']);
        this.toastrService.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        });
      }else if(this.data.status === 0){
        this.toastrService.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        });
      }


    });
  }

}

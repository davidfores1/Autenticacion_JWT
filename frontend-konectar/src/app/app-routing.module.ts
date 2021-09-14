  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  
{
  path:'', component: ClienteComponent,
  canActivate:[AuthGuard],
  data: {
    rol: ['Admin','Vendedor']
  }
},
{
  path:'registro', component: RegisterComponent,
  canActivate:[AuthGuard],
  data: {
    rol: ['Admin']
  }
},
{
  path:'login', component: LoginComponent
},
{
  path:'usuarios', component: UsuarioComponent,
  canActivate:[AuthGuard],
  data: {
    rol: ['Admin']
  }
}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

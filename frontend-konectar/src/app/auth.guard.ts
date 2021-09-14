import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root' // ADDED providedIn root here.
  })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }
    token: any;
    url:string;
    nombre_rol:any;
 
    canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let url:string = state.url;
        return this.checkUserLogin(next, url);
      }
      

    checkUserLogin(routRol: ActivatedRouteSnapshot, url: any):any {
        this.token = localStorage.getItem('token');
        this.nombre_rol = localStorage.getItem('nombre_rol');
        // this.roles.push(this.nombre_rol); 

        if (this.token && (routRol.data.rol.indexOf(this.nombre_rol) !== -1)) {
            this.nombre_rol = [];
            return true;
        } else {
            this.router.navigate(['login']);
            localStorage.removeItem('token');
        }
    }
}



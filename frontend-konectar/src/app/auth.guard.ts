import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root' // ADDED providedIn root here.
  })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }
    token: any;
    canActivate():any {
        this.token = localStorage.getItem('token');
        if (this.token) {
            return true;
        } else {
            this.router.navigate(['login']);
        }
    }
}



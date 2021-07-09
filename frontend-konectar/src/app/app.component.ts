import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  token: any;
  userData: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    console.log(this.token);
    console.log(this.userData);

  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}

import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  token: any;
  userData: any;
  title: any;

  constructor() { }

  ngOnInit(): void {
    if(this.token){
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
  }
  }

}

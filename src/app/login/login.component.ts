import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="";
  password="";
  constructor(){}

  ngOnInit(){

  }

  LoginUser(){
      if(this.username == "admin" && this.password == "admin"){
          console.log("coisas");

      }

  }

}

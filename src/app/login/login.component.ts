import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  username:string="";
  password:string="";
  subscription:Subscription;
  data:object={};


  constructor(){}



  ngOnDestroy(): void {
    this.subscription= 
  }

  ngOnInit(){

  }

  LoginUser(){
      if(this.username == "admin" && this.password == "admin"){
          console.log("coisas");

      }

  }

}
